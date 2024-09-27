// import {Input} from "@nextui-org/react";

// export default function Doubletext() {
//   return (
//     <div className="flex w-full flex-wrap md:flex-nowrap gap-4 rounded ">
//       <Input type="name" label="First Name"  variant="bordered" />
//       <Input type="name" label="Last Name"  variant="bordered" />
//     </div>
//   );
// }
import TextBox from "./TextBox";

export default function Doubletext() {
    return (
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 rounded ">
      <TextBox
          label="First Name"
          name="email" 
          placeholder="First Name"
        />
        <TextBox
          label="Last Name"
          name="email" 
          placeholder="Last Name"
        />
      </div>
    );
  }