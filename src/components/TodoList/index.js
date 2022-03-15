import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useState } from "react";
import { addTodoAction } from "../redux/action";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { searchTextSelector, todoListSelector, todosRemainingSelector } from "../redux/selector";

export default function TodoList() {
  const dispatch = useDispatch();

  // state
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  

  //Lấy ra từ store để hiển thị lên UI
  // const todoList = useSelector((state) => state.todoList); cách 1
  // selector
  const todoList = useSelector(todosRemainingSelector);
  // const searchText = useSelector(searchTextSelector)

  const handleAddButtonClick = () => {
    // Khi click nút Add thì một action sẽ được dispatch đến rootReducer
    dispatch(
      addTodoAction({
        id: uuid,
        name: todoName,
        priority: priority,
        completed: false,
      })
    );

    //Khi click xong thì set về default
    setTodoName("");
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
    console.log(e.target.value)
  };

  const handlePriorityChange = (value) => {
    // Do trong Select.Option luon co property la value
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" /> */}
        {todoList.map((todo) => (
          <Todo key={todo.id} id={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          {/* input */}
          <Input value={todoName} onChange={handleInputChange} />

          {/* select */}
          <Select defaultValue="Medium" onChange={handlePriorityChange}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>

          {/* button */}
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
