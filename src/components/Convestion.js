import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import iconContainer from "../images/iconContainer (1).png"; // تأكد من أن المسار صحيح للصورة
import icon from "../images/pro.jpg";
import Container from "../images/people.png";
import p1 from "../images/p1.png";
function Convestion() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [allMessages, setAllMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");

  const contacts = [
    { id: 1, name: "Jane Doe", img: p1 },
    { id: 2, name: "John Smith", img: icon },
    { id: 3, name: "Alice Johnson", img: Container },
    { id: 4, name: "Jane ", img: p1 },
    { id: 5, name: "John ", img: icon },
    { id: 6, name: "Alice ", img: Container },
    { id: 7, name: " Doe", img: p1 },
    { id: 8, name: " Smith", img: icon },
    { id: 9, name: " Johnson", img: Container },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedContact) {
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const updatedMessages = {
        ...allMessages,
        [selectedContact.id]: [
          ...(allMessages[selectedContact.id] || []),
          { text: newMessage, sender: "You", time },
        ],
      };
      setAllMessages(updatedMessages);
      setNewMessage("");
    }
  };

  return (
    <div className="container-fluid px-5 d-flex" style={{ height: "80vh" }}>
      {/* Sidebar */}
      <div
  className="col-3 border-end bg-white py-3 custom-scrollbar shadow"
  style={{
    backgroundColor: "white", // الخلفية البيضاء
    borderRadius: "20px", // الزوايا الدائرية
    marginRight: "15px", // فصل بين الشريط الجانبي ومنطقة الشات
    height: "80vh", // تثبيت الارتفاع
    overflowY: "auto", // تمكين التمرير العمودي
  }}
>
  <div className="d-flex justify-content-between align-items-center mb-3 ">
    <h5 className="fw-bold text-danger mx-3">Contacts</h5>
  </div>
  <div className="d-flex flex-column">
    {contacts.map((contact) => {
      const lastMessage =
        allMessages[contact.id]?.length > 0
          ? allMessages[contact.id][allMessages[contact.id].length - 1].text
          : "No messages yet";

      return (
        <div
          key={contact.id}
          className={`d-flex align-items-center p-3 border-bottom ${
            selectedContact?.id === contact.id
              ? "bg-danger text-white"
              : "bg-white"
          }`}
          onClick={() => setSelectedContact(contact)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={contact.img}
            alt={contact.name}
            className="rounded me-3 border"
            width="50"
            height="50"
          />
          <div>
            <h6 className="mb-0">{contact.name}</h6>
            <small
              className={`${
                selectedContact?.id === contact.id
                  ? "text-light"
                  : "text-muted"
              }`}
              style={{ fontSize: "12px" }}
            >
              {lastMessage.length > 30
                ? `${lastMessage.substring(0, 30)}...`
                : lastMessage}
            </small>
          </div>
        </div>
      );
    })}
  </div>
</div>



      {/* Chat Section */}
      <div
        className="col-9 d-flex flex-column shadow"
        style={{
          backgroundColor: "white", // الخلفية البيضاء
          borderRadius: "20px", // الزوايا الدائرية
          marginLeft: "15px", // فصل بين الشريط الجانبي ومنطقة الشات
        }}
      >
        {selectedContact ? (
          <>
            {/* Chat Header with Contact Image */}
            <div
              className="border-bottom p-3 bg-danger text-white d-flex align-items-center"
              style={{
                borderTopLeftRadius: "20px", // Rounded left side
                borderTopRightRadius: "20px", // Rounded right side
              }}
            >
              <img
                src={selectedContact.img}
                alt={selectedContact.name}
                className="rounded me-3"
                width="40"
                height="40"
              />
              <h5 className="mb-0">{selectedContact.name}</h5>
            </div>

            {/* Messages */}
            <div
              className="flex-grow-1 p-3 overflow-auto custom-scrollbar"
              style={{
                backgroundColor: "white", // White background for the messages area
                minHeight: "300px",
              }}
            >
              {allMessages[selectedContact.id]?.length > 0 ? (
                allMessages[selectedContact.id].map((msg, index) => (
                  <div
                    key={index}
                    className={`d-flex ${
                      msg.sender === "You"
                        ? "justify-content-end"
                        : "justify-content-start"
                    } mb-2`}
                  >
                    <div
                      className={`p-2 rounded ${
                        msg.sender === "You"
                          ? "bg-danger text-white"
                          : "bg-white text-danger border border-danger"
                      }`}
                      style={{ maxWidth: "70%" }}
                    >
                      <p className="mb-1">{msg.text}</p>
                      <small className="text-white">{msg.time}</small>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-muted mt-5">
                  <p>No messages yet. Start a conversation!</p>
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="border-top p-3 bg-white">
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control border-danger"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  className="btn btn-danger ms-2"
                  onClick={handleSendMessage}
                >
                  Send
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
            <img
              src={iconContainer}
              alt="{selectedContact.name}"
              className="rounded-circle me-3 my-5"
            />
            <h3 className="text-danger">Messages</h3>
            <p>Click on a contact to view messages.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Convestion;
