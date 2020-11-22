import { useState } from "react";
import copy from "copy-to-clipboard";

import cx from "classnames";

import { Button } from "../ui-kits";

import styles from "./ShortURLBox.module.scss";

export const ShortURLBox = ({ url, shortURL }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    copy(shortURL);
    setCopySuccess(true);
  };

  return (
    <div className={styles.ShortURLBox}>
      <div className={styles.OriginalLinkSection}>
        <p className={styles.OriginalLink}>{url}</p>
      </div>
      <div className={styles.AfterLinkSection}>
        <p className={styles.ShortLink}>
          <a href={shortURL} target="_blank">
            {shortURL}
          </a>
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
