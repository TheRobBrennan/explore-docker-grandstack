import jwt from "jsonwebtoken";
import { DEFAULT_JWT_SECRET } from '../config/constants'
export const SECRET = process.env.JWT_SECRET || DEFAULT_JWT_SECRET;

// Custom middleware to add a user object to the server requests
export const injectUser = async req => {
  const token = req.headers.authorization;
  try {
    const { user } = await jwt.verify(token, SECRET);
    req.user = user;
  } catch (error) {
    // We don't care about null tokens; they will always be improperly formed JWT requests
    if (!token || token === null) {
      console.error(error);
    }
  }
  req.next();
};
