import { useState } from "react";

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country: string;
}

export enum Country {
  Brazil = "Brazil",
  India = "India",
  Canada = "Canada",
}

export const Person = (props: Props) => {
  const [name, setName] = useState<string>("");

  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Age: {props.age}</h1>
      <h1>This Person {props.isMarried ? "is" : "is not"} married.</h1>
      {props.friends.map((friend: string) => {
        return <h1>{friend}</h1>;
      })}
      <h1>{props.country}</h1>
    </div>
  );
};
