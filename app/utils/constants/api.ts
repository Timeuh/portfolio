/* -------------------------------------------------------------------------- */
/*                            HTTP Response codes                             */
/* -------------------------------------------------------------------------- */

// request successful
export const HTTP_OK = 200;

// resource created
export const HTTP_CREATED = 201;

// can't process request
export const HTTP_BAD_REQUEST = 400;

// resource not found
export const HTTP_NOT_FOUND = 404;

// schema validation failed
export const HTTP_SCHEMA_ERROR = 422;

// any server error
export const HTTP_SERVER_ERROR = 500;

/* -------------------------------------------------------------------------- */
/*                           Error Response messages                          */
/* -------------------------------------------------------------------------- */

// any server error
export const MSG_SERVER_ERROR = 'Internal server error';

// resource is duplicated
export const MSG_DUPLICATE_ERROR = 'Duplicate error';

// an environment variable is not defined
export const MSG_ENV_NOT_DEFINED = 'The following environment variable is not defined:';

// resource not found
export const MSG_NOT_FOUND = 'Resource not found';

// passwords does not match
export const MSG_INCORRECT_PASSWORD = 'Password is incorrect';

// foreign key error
export const MSG_FOREIGN_KEY_ERROR = 'Foreign key error';

// invalid image name
export const MSG_INVALID_IMAGE = 'Invalid image name';

/* -------------------------------------------------------------------------- */
/*                               Bcrypt variables                             */
/* -------------------------------------------------------------------------- */

// number of salt rounds for bcrypt password encryption
export const SALT_ROUNDS = 10;

/* -------------------------------------------------------------------------- */
/*                                JWT variables                               */
/* -------------------------------------------------------------------------- */

// JWT encryption algorithm
export const JWT_ALG = 'HS256';

/* -------------------------------------------------------------------------- */
/*                                 Logos paths                                */
/* -------------------------------------------------------------------------- */

// path to projects gifs
export const LOGO_PROJECT_GIF_PATH = './logos/projects/';

// path to categories logos
export const LOGO_CATEGORY_PATH = './logos/categories/';

// path to experiences logos
export const LOGO_EXPERIENCE_PATH = './logos/experiences/';

// path to technologies logos
export const LOGO_TECHNOLOGY_PATH = './logos/technologies/';
