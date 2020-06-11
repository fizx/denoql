import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  graphql,
} from "https://cdn.pika.dev/graphql@^15.0.0";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      hello: {
        type: GraphQLString,
        resolve: () => "Hello World!",
      },
    }),
  }),
});

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!";
  },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, "{ hello }", root).then((response) => {
  console.log(response);
});
