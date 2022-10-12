import React from "react";
import styles from "./ManageTok.module.css";
import Button from "../Button/Button";

const ManageTokens = () => {
  return (
    <div className={styles.manageTok}>
      <div className={styles.name}>Manage Tokens</div>
      <div className={styles.cashName}>
        🟢 StBOOT
        <div className={styles.cash}>3 000 000 000</div>
      </div>

      <div className={styles.info}>
        Saint Bostrom — Blessed Bostroms for charitable deeds
      </div>
      <div className={styles.info}>
        Contract Address: bostrom123456789qwertyasdfghjkl
      </div>
      <Button color="white" type="button" size="lg">
        Send
      </Button>
      <div className={styles.indent}>
        <div className={styles.line}></div>
        <div className={styles.cashName}>
          {" "}
          🇬🇪 KLARI
          <div className={styles.cash}>1000</div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.cashName}>
          💩 ShitCoin
          <div className={styles.cash}>500</div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.cashName}>
          {" "}
          🐽 PigNon
          <div className={styles.cash}>10 000</div>
        </div>
      </div>
      <Button color="green" type="button" size="lg">
        Add Token
      </Button>
    </div>
  );
};

export default ManageTokens;
