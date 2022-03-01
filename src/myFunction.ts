import middy from 'middy';

const handlerFunction = async (event: any, context: any) => {
  return 'Hello from handler!';
};

export const handler = middy(handlerFunction);

