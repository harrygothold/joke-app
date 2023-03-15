import { ChangeEvent, Dispatch, SetStateAction } from "react";

export type TStateDispatch<T> = Dispatch<SetStateAction<T>>;

export type TInputChange = ChangeEvent<HTMLInputElement>;
