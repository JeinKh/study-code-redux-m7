import { Field, Form, Formik } from "formik";
import s from "./TodoList.module.css";
import { useDispatch } from "react-redux";
// import { addTodo } from "../../redux/todos/slice";
// import { nanoid } from "@reduxjs/toolkit";
import { addTodoThunk } from "../../redux/todos/operations";

export const AddForm = () => {
  const dispatch = useDispatch();
  const initialValues = { todo: "" };

  const onSubmit = (values, options) => {
    // const newItem = { todo: values.todo, id: nanoid() };

    dispatch(addTodoThunk({ todo: values.todo }));
    options.resetForm();
  };
  return (
    <div className={s.addFormWrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field className={s.input} name="todo" placeholder="Enter new todo" />
          <button type="submit">Add todo</button>
        </Form>
      </Formik>
    </div>
  );
};
