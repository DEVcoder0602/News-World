import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

const simulateNetworkRequest = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

const InviteCard = () => {
  const [isLoading, setLoading] = useState(false);
  const [showCc, setShowCc] = useState(false);
  const [videoCall, setVideoCall] = useState(false);
  const [phoneCall, setPhoneCall] = useState(false);
  const [officeCall, setOfficeCall] = useState(false);

  const name = "Lorem idfifn";

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(function () {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Card className="m-auto w-50">
      <Card.Body>
        <Card.Title className="d-flex justify-content-start fs-2">
          <i
            class="fa-regular fa-calendar-check"
            style={{ paddingRight: "15px" }}
          ></i>
          Schedule Interview
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted d-flex align-items-center">
          To:
          <span className="bg-secondary text-dark bg-opacity-25 ms-2 p-1 rounded-2">
            {name}
          </span>
          <span className="ms-2">
            <Button
              variant="link"
              onClick={() => setShowCc(true)}
              disabled={showCc}
            >
              Cc
            </Button>
          </span>
        </Card.Subtitle>

        {showCc ? (
          <Card.Subtitle className="mb-2 text-muted d-flex align-items-center">
            Cc:
            <span className="bg-secondary text-dark bg-opacity-25 ms-2 p-1 rounded-2">
              Some other person
            </span>
          </Card.Subtitle>
        ) : null}

        <Card.Subtitle className="d-flex flex-column">
          <label
            htmlFor="interviewTitle"
            className="d-flex justify-content-start mt-3"
          >
            Add title
          </label>
          <input
            type="text"
            className="mt-1 py-1"
            placeholder="e.g. First round interview with Tech lead"
            id="interviewTitle"
          />
        </Card.Subtitle>
        <Card.Subtitle className="d-flex flex-column">
          <label
            htmlFor="interviewDuration"
            className="d-flex justify-content-start mt-3"
          >
            Duration
          </label>
          <div
            class="btn-group w-25 mt-2"
            role="group"
            aria-label="Basic radio toggle button group"
            id="interviewDuration"
          >
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio1"
              autocomplete="off"
              checked
            />
            <label class="btn btn-outline-primary rounded-pill" for="btnradio1">
              30 min
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
            />
            <label class="btn btn-outline-primary rounded-pill" for="btnradio2">
              60 min
            </label>
          </div>
        </Card.Subtitle>
        <Card.Subtitle className="d-flex flex-column justify-content-start">
          <label htmlFor="interviewDate" className="d-flex mt-3">
            Interview date & time
          </label>
          <div className="d-inline-flex mt-2">
            <input type="date" style={{ width: "15rem" }} id="interviewDate" />
            <input type="time" className="ms-5" style={{ width: "15rem" }} />
            {/* <form className="ps-3">
              <select id="timeSlot" className="py-1" style={{ width: "15rem" }}>
                <option value="none" selected disabled hidden>
                  Pick a slot
                </option>
                <option value="2-3 PM">2-3 PM</option>
                <option value="4-5 PM">4-5 PM</option>
                <option value="10-11 AM">10-11 AM</option>
                <option value="12-1 PM">12-1 PM</option>
              </select>
            </form> */}
          </div>
          <div className="mt-1 me-5 text-muted fs-6">IST (+5:30 hours GMT)</div>
        </Card.Subtitle>
        <Card.Subtitle className="mt-3">
          <label className="d-flex">Interview type</label>
          <div className="d-flex mt-2">
            <button
              type="button"
              className="btn btn-outline-primary rounded-pill"
              onClick={() => {
                setVideoCall(true);
                setPhoneCall(false);
                setOfficeCall(false);
              }}
            >
              <i className="fa-solid fa-video me-1"></i>
              Video call
            </button>
            <button
              type="button"
              className="btn btn-outline-primary ms-3 rounded-pill"
              onClick={() => {
                setVideoCall(false);
                setPhoneCall(true);
                setOfficeCall(false);
              }}
            >
              <i className="fa-solid fa-phone me-1"></i>
              Phone
            </button>
            <button
              type="button"
              className="btn btn-outline-primary ms-3 rounded-pill"
              onClick={() => {
                setVideoCall(false);
                setPhoneCall(false);
                setOfficeCall(true);
              }}
            >
              <i className="fa-regular fa-building me-1"></i>
              In-office
            </button>
          </div>
        </Card.Subtitle>
        {videoCall ? (
          <Card.Subtitle className="d-flex flex-column mt-3">
            <label htmlFor="url" className="d-flex mb-1">
              Share video call link
            </label>
            <input
              className="d-flex justify-content-start mt-2 py-1"
              type="url"
              id="url"
              placeholder="e.g. https://meet.google.com/zwx-ifrf-ssi"
              pattern="https://.*"
              size="30"
              required
            />
            {/* <div className="d-flex justify-content-start mt-2 text-muted">
            Unable to create & share video call link?
            <span className="ps-2">
              <a href="/">Need help</a>
            </span>
          </div> */}
          </Card.Subtitle>
        ) : null}

        {phoneCall ? (
          <Card.Subtitle className="d-flex flex-column mt-3">
            <label htmlFor="phoneNo." className="d-flex mb-1">
              Share phone number
            </label>
            <input
              className="d-flex justify-content-start mt-2 py-1"
              type="text"
              id="phoneNo."
              placeholder="89383#####"
              pattern="[6789][0-9]{9}"
            />
            {/* <div className="d-flex justify-content-start mt-2 text-muted">
            Unable to create & share video call link?
            <span className="ps-2">
              <a href="/">Need help</a>
            </span>
          </div> */}
          </Card.Subtitle>
        ) : null}

{officeCall ? (
          <Card.Subtitle className="d-flex flex-column mt-3">
            <label htmlFor="address" className="d-flex mb-2">
              Share office address
            </label>
            <textarea id="address" placeholder="Address here...."></textarea>
            {/* <div className="d-flex justify-content-start mt-2 text-muted">
            Unable to create & share video call link?
            <span className="ps-2">
              <a href="/">Need help</a>
            </span>
          </div> */}
          </Card.Subtitle>
        ) : null}

        <Card.Text className="d-flex flex-column mt-3">
          <label
            htmlFor="desc"
            className="d-flex font-normal mb-1"
            style={{ fontWeight: "500" }}
          >
            Add description & contact number
          </label>
          <textarea id="desc" cols="30" rows="5">
            Hi Lorem, Kindly confirm your availability on the mentioned date and
            time ? Please let me know if you want rescheduling. I'll be
            available at contact number for any further clarifications.
          </textarea>
        </Card.Text>
        <Button
          variant="primary"
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
        >
          {isLoading ? "Scheduling…" : "Schedule interview"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default InviteCard;
