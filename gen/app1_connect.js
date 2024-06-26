// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=js"
// @generated from file app1.proto (package app1.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { HelloRequest, HelloResponse } from "./app1_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service app1.v1.Greeter
 */
export const Greeter = {
  typeName: "app1.v1.Greeter",
  methods: {
    /**
     * @generated from rpc app1.v1.Greeter.Hello
     */
    hello: {
      name: "Hello",
      I: HelloRequest,
      O: HelloResponse,
      kind: MethodKind.Unary,
    },
  }
};

