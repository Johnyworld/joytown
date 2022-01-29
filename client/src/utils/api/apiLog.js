export const apiLog = {
  req: (...args) =>
    process.env.NODE_ENV !== 'production' &&
    console.log('%c:: 📝 REQUEST :: ', 'color: #bada55', ...args),

  res: (...args) =>
    process.env.NODE_ENV !== 'production' &&
    console.log('%c:: 📦 RESPONSE :: ', 'color: #00c5ff', ...args),

  err: (...args) =>
    process.env.NODE_ENV !== 'production' &&
    console.log('%c:: 📦 ERROR :: ', 'color: #ff5757', ...args),
};
