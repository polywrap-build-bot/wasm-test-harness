import {
  Args_boolMethod,
  Args_bytesMethod,
  Args_arrayMethod,
  Args_intMethod,
  Args_uIntMethod,
  ModuleBase
} from "./wrap";

export class Module extends ModuleBase {
  boolMethod(args: Args_boolMethod): bool {
    return args.arg;
  }

  intMethod(args: Args_intMethod): i32 {
    return args.arg;
  }

  uIntMethod(args: Args_uIntMethod): u32 {
    return args.arg;
  }

  bytesMethod(args: Args_bytesMethod): ArrayBuffer {
    return args.arg;
  }

  arrayMethod(args: Args_arrayMethod): Array<string> | null {
    return args.arg;
  }
}