import React, { useRef, useState, useEffect } from "react";
import ReactToPrint from "react-to-print";
import { Print, Refresh } from "./assets/Icons";

function PdfTemplate({ getNowDate }) {
  const ref = useRef();

  const [treasurer, setTreasurer] = useState("Nurhasan, SE");
  const [number, setNumber] = useState();
  const [donor, setDonor] = useState();
  const [address, setAddress] = useState();
  const [amount, setAmount] = useState();
  const [receiver, setReceiver] = useState();
  const [information, setInformation] = useState();

  const resetValue = () => {
    setTreasurer("Nurhasan, SE");
    setNumber();
    setDonor();
    setAddress();
    setAmount();
    setReceiver();
    setInformation();
  };

  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <div className="container" ref={ref}>
          <br />
          <header className="border-bottom mb-3">
            <h4 className="text-center mb-0">
              YAYASAN MASJID BAITURRAHMAN BANYUWANGI
            </h4>
            <p className="text-center text-secondary mt-2">
              JL. Jend Sudriman No.137 Banyuwangi. Telp/Fax (0333) 421038,
              421283
            </p>
          </header>
          <div>
            <h5 className="mb-0 text-center fw-bold">
              Tanda Terima Infaq dan Shadaqah
            </h5>
            <div className="my-4 d-flex flex-column">
              <ListLabel label="No" value={number} />
              <ListLabel label="Tanggal" value={getNowDate} />
              <ListLabel label="Nama donatur" value={donor} />
              <ListLabel label="Alamat" value={address} />
              <ListLabel label="Jumlah" value={amount} />
              <ListLabel label="Diberikan kepada" value={receiver} />
              <ListLabel label="Keterangan" value={information} />
            </div>
            <p className="mb-0" style={{ textAlign: "justify" }}>
              Yayasan dengan tulus mengucapkan terima kasih yang
              sebesar-besarnya atas infaq dan shadqah yang telah diberikan.
              Semoga kebaikan ini mendatangkan berkah yang melimpah dan menjadi
              amal jariyah yang senantiasa mengalirkan manfaat bagi banyak
              orang. Amiin.
            </p>
            <div>
              <div className="row mt-4">
                <div className="col"></div>
                <div className="col">
                  <p className="mb-0 text-center">Banyuwangi, {getNowDate}</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="mb-0 text-center">Donatur</p>
                  <div style={{ height: 80 }}></div>
                  <p className="mb-0 text-center fw-bold">
                    <u>{donor}</u>
                  </p>
                </div>
                <div className="col">
                  <p className="text-center mb-0">Bendahara Umum</p>
                  <div style={{ height: 80 }}></div>
                  <p className="mb-0 text-center fw-bold">
                    <u>{treasurer}</u>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex gap-2 mt-4 mb-4">
          <ReactToPrint
            trigger={() => (
              <button className="btn btn-light text-secondary border fw-medium">
                <Print /> Cetak Bukti
              </button>
            )}
            content={() => ref.current}
            documentTitle={"Tanda Terima Infaq dan Shadaqah"}
          />

          <button
            onClick={resetValue}
            className="btn btn-light text-secondary border fw-medium"
            aria-label="Reset"
          >
            <Refresh />
          </button>

          <input
            className="form-control w-50"
            type="text"
            value={treasurer}
            onChange={(e) => setTreasurer(e.target.value)}
            aria-label="Name of treasurer"
          />
        </div>

        <div className="card p-4 bg-light">
          <div className="d-flex gap-3 mb-3">
            <div>
              <label htmlFor="number" className="form-label">
                No
              </label>
              <input
                autoComplete="off"
                type="number"
                min={0}
                className="form-control"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <small className="form-text fst-italic">cth: 1</small>
            </div>
            <div>
              <label htmlFor="donor" className="form-label">
                Nama Donatur
              </label>
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                id="donor"
                value={donor}
                onChange={(e) => setDonor(e.target.value)}
              />
              <small className="form-text fst-italic">cth: Hamba ALLAH</small>
            </div>
            <div>
              <label htmlFor="address" className="form-label">
                Alamat
              </label>
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <small className="form-text fst-italic">cth: Banyuwangi</small>
            </div>
          </div>
          <div className="d-flex gap-3 mb-3">
            <div className="w-100">
              <label htmlFor="amount" className="form-label">
                Jumlah
              </label>
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                id="amount"
                value={amount}
                onChange={(e) => setAmount("Rp." + e.target.value)}
              />
              <small className="form-text fst-italic">cth: 50,000</small>
            </div>
            <div className="w-100">
              <label htmlFor="receiver" className="form-label">
                Diberikan Kepada
              </label>
              <input
                autoComplete="off"
                type="text"
                className="form-control w-100"
                id="receiver"
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
              />
              <small className="form-text fst-italic">cth: Anak yatim</small>
            </div>
          </div>
          <div>
            <label htmlFor="information" className="form-label">
              Keterangan
            </label>
            <textarea
              type="text"
              className="form-control"
              style={{ height: 120 }}
              id="information"
              value={information}
              onChange={(e) => setInformation(e.target.value)}
            />
            <small className="form-text fst-italic">
              cth: Mohon kesembuhan untuk...
            </small>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <>
      <footer className="p-4">
        <p className="text-center mb-0">
          Made with ♥ by{" "}
          <a
            href="https://www.omigusty.com/"
            target="_blank"
            className="text-decoration-none"
          >
            Omi Gusty Rifani
          </a>
        </p>
      </footer>
    </>
  );
}

function ListLabel({ label, value }) {
  return (
    <>
      <div className="d-flex gap-2">
        <p className="mb-1" style={{ width: 160 }}>
          {label}
        </p>
        <p className="mb-1">:</p>
        <p className="mb-1">{value}</p>
      </div>
    </>
  );
}

export default function App() {
  const [Dates, setDates] = useState("");
  useEffect(() => {
    const current = new Date();
    const locale = "id-ID";
    const date = `${current.getDate()} ${current.toLocaleString(locale, {
      month: "long",
    })} ${current.getFullYear()}`;
    console.log(`Date is ${date}`);
    setDates(date);
  }, []);

  return (
    <>
      <PdfTemplate getNowDate={Dates} />
    </>
  );
}
