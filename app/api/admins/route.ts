import sendErrorResponse from '@functions/api/sendErrorResponse';
import prisma from '@utils/prisma/client';
import {Admin, AdminFromDatabase} from '@schemas/api/admin/admin.schema';
import sendCollectionResponse from '@functions/api/sendCollectionResponse';
import sendJsonResponse from '@functions/api/sendJsonResponse';
import {HTTP_CREATED} from '@constants/api';
import {Credentials, credentialsValidator} from '@schemas/api/admin/credentials.schema';

/**
 * Get all admins
 *
 * @param {Request} request the request data object
 *
 * @returns {Promise<Response>} a promise containing the response in json format
 */
export async function GET(request: Request): Promise<Response> {
  try {
    const admins: AdminFromDatabase[] = await prisma.admin.findMany();

    const adminsToReturn: Admin[] = admins.map((admin: AdminFromDatabase) => {
      return {
        email: admin.email,
        id: admin.id,
        links: {
          self: {
            method: 'GET',
            href: `/admins/${admin.id}`,
          },
          update: {
            method: 'PUT',
            href: `/admins/${admin.id}`,
          },
          delete: {
            method: 'DELETE',
            href: `/admins/${admin.id}`,
          },
        },
      };
    });

    return sendCollectionResponse<Admin>(adminsToReturn);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}

/**
 * Create a new admin
 *
 * @param {Request} request the request data object
 *
 * @returns {Promise<Response>} a promise containing the response in json format
 */
export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();

    const parsedBody: Credentials = await credentialsValidator.validate(body);

    const admin: AdminFromDatabase = await prisma.admin.create({
      data: {
        email: parsedBody.email,
        password: parsedBody.password,
      },
    });

    const adminToReturn: Admin = {
      email: admin.email,
      id: admin.id,
      links: {
        self: {
          method: 'GET',
          href: `/admins/${admin.id}`,
        },
        update: {
          method: 'PUT',
          href: `/admins/${admin.id}`,
        },
        delete: {
          method: 'DELETE',
          href: `/admins/${admin.id}`,
        },
      },
    };

    return sendJsonResponse<Admin>(adminToReturn, HTTP_CREATED);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
