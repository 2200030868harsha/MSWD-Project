// Import any necessary modules or dependencies
// For example, if you need to use the `errorHandler` function from another file, import it here
import { errorHandler } from './error.js';

// Define admin-specific error handling functions
export const adminNotFoundError = () => {
    return errorHandler(404, 'Admin not found');
};

export const adminCreationFailedError = () => {
    return errorHandler(400, 'Failed to create admin');
};

// You can define more error handling functions here as needed
