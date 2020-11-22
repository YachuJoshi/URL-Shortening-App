import { useState, useEffect, useRef } from "react";
import cx from "classnames";

import { Button } from "../ui-kits";

import styles from "./ShortURLBox.module.scss";

export const ShortURLBox = ({ url, shortURL }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const shortURLRef = useRef();

  const handleCopy = () => {
    const range = new Range();
    range.setStart(shortURLRef.current, 0);
    range.setEnd(shortURLRef.current, 1);
    document.getSelection().addRange(range);
    document.execCommand("copy");
    document.getSelection().empty();
    setCopySuccess(true);
    console.log(shortURLRef.current);
  };

  return (
    <div className={styles.ShortURLBox}>
      <div className={styles.OriginalLinkSection}>
        <p className={styles.OriginalLink}>{url}</p>
      </div>
      <div className={styles.AfterLinkSection}>
        <p ref={shortURLRef} className={styles.ShortLink}>
          {shortURL}
        </p>
        <Button
          kind="primary"
          className={cx(styles.Button, {
            [styles.ButtonCopySuccess]: copySuccess,
          })}
          onClick={handleCopy}
        >
          {!copySuccess ? <p>Copy</p> : <p>Copied &#10004;</p>}
        </Button>
      </div>
    </div>
  );
};
