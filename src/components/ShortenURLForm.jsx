import { useState, useEffect } from "react";
import cx from "classnames";

import styles from "./ShortenURLForm.module.scss";

import { Button } from "../ui-kits";
import { getShortURL } from "../services";
import { useShortURLs } from "../context";

const expression = /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g;
const regex = new RegExp(expression);

export const ShortenURLForm = () => {
  const [URL, setURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const { setShortURLs } = useShortURLs();

  useEffect(() => {
    if (URL) {
      if (URL.match(regex)) {
        setError({
          status: false,
          message: "",
        });
      } else {
        setError({
          status: true,
          message: "Please enter a valid URL.",
        });
      }
    }
  }, [URL]);

  async function onSubmit(e) {
    e.preventDefault();
    if (!error.status) {
      setLoading(true);
      const data = await getShortURL(URL);
      setLoading(false);
      const { original_link, full_short_link } = data.result;
      setShortURLs((prevURLs) => [
        ...prevURLs,
        {
          URL: original_link,
          shortURL: full_short_link,
        },
      ]);
    }
    setURL("");
  }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.ShortenURLSection}>
        <figure className={styles.BackgroundFigure}>
          <picture>
            <source
              media="(min-width:1140px)"
              srcSet="/images/bg-shorten-desktop.svg"
            />
            <img src="/images/bg-shorten-mobile.svg" alt="Bg-Design" />
          </picture>
        </figure>
        <form className={styles.URLForm} onSubmit={(e) => onSubmit(e)}>
          <input
            type="url"
            value={URL}
            required
            className={cx(styles.URLInput, {
              [styles.ErrorURL]: error.message,
            })}
            placeholder="Shorten a link here..."
            onChange={(event) => setURL(event.target.value)}
          />
          {error.status && <p className={styles.Error}>{error.message}</p>}
          <Button
            type="submit"
            kind="primary"
            disabled={loading}
            className={styles.ButtonSubmit}
          >
            Shorten It!
          </Button>
        </form>
      </div>
    </div>
  );
};
