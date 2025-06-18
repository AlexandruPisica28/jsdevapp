import { useState, type ChangeEvent, type FormEvent } from "react";

export default function Form() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Datele introduse sunt: ${name} ${email} ${password} ${phone}`);
  };

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) =>
      setter(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nume:
        <input
          type="text"
          value={name}
          onChange={handleChange(setName)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleChange(setEmail)}
        />
      </label>
      <label>Parola:
        <input
          type="password"
          value={password}
          onChange={handleChange(setPassword)}
        />
      </label>
      <label>
        Telefon:
        <input
          type="text"
          value={phone}
          onChange={handleChange(setPhone)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}
