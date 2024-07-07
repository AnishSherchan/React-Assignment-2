import { useState } from "react";
import ComponentContainer from "../Container/ComponentContainer";
import PreviewContainer from "../Container/PreviewContainer";
import Input from "../InputField/Input";

const SearchFilter = () => {
  const userData = [
    {
      id: 1,
      name: "Jane Johnson",
      username: "jane_johnson1",
      email: "jane.johnson1@example.com",
    },
    {
      id: 2,
      name: "Charlie Davis",
      username: "charlie_davis2",
      email: "charlie.davis2@example.com",
    },
    {
      id: 3,
      name: "Alice Smith",
      username: "alice_smith3",
      email: "alice.smith3@example.com",
    },
    {
      id: 4,
      name: "John Doe",
      username: "john_doe4",
      email: "john.doe4@example.com",
    },
    {
      id: 5,
      name: "Bob Brown",
      username: "bob_brown5",
      email: "bob.brown5@example.com",
    },
  ];
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    setFilterText(searchText);
  };

  const filteredData = userData.filter((user) =>
    user.name.toLocaleLowerCase().includes(filterText)
  );
  return (
    <ComponentContainer>
      <div className="title">
        <h1>Qn 5: Create a search filter for a list of items.</h1>
        <p>
          - Build a component that displays a list of items and includes a
          search bar to filter the list based on user input. Use state to manage
          the search query and filtered results, passing the filtered list as
          props to the child component that renders the list.
        </p>
      </div>
      <PreviewContainer>
        <h1 className=" text-center">Basic Search filter</h1>
        <div className="filter-input">
          <Input
            type="text"
            placeholder="Filter Data"
            value={filterText}
            onChange={(e) => handleFilterChange(e)}
          />
        </div>
        <div className="data flex flex-col justify-start gap-2">
          {filteredData.map((user) => {
            return (
              <div
                key={user.id}
                className="flex flex-wrap rounded-md border p-4 border-gray-400 gap-3 justify-between"
              >
                <p className="text-lg font-semibold">Name: {user.name}</p>
                <p className="text-lg font-semibold">
                  Username: {user.username}
                </p>
                <p className="text-lg font-semibold">Email: {user.email}</p>
              </div>
            );
          })}
        </div>
      </PreviewContainer>
    </ComponentContainer>
  );
};

export default SearchFilter;
