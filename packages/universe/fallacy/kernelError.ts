class KernelError extends Error {
  statusCode = 400;
  constructor(message) {
    super(message);
  }

  serialize(): Record<string, string>[] | undefined {
    return;
  }
}

export default KernelError;
