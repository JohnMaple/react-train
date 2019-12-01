import React from "react";
import { withFormik } from "formik";
import classnames from "classnames";
import styles from "./index.less";

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: null,
      player2: null
    };
  }

  loadRepo(player) {
    const { values, setFieldValue } = this.props;
    console.log("player", values[player]);
    this.setState({
      [player]: values[player]
    });
    setFieldValue(player, "");
  }

  clear(player) {
    this.setState({
      [player]: null
    });
  }

  render() {
    const {
      values,
      errors,
      handleSubmit,
      handleChange,
      handleBlur,
      onBattle
    } = this.props;
    const { player1, player2 } = this.state;

    return (
      <>
        <h3 className="text-center">Players</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles["players-container"]}>
            <div className={styles.player}>
              <h3>Player One</h3>
              {player1 ? (
                <div className={styles["player--selected"]}>
                  <div className={styles.player__info}>
                    <img
                      src={`https://github.com/${player1}.png?size=200`}
                      alt={player1}
                      className={styles.player__avatar}
                    />
                    <span className={styles.player__name}>{player1}</span>
                  </div>
                  <div className={styles["player__close--wrapper"]}>
                    <button
                      type="button"
                      className={classnames("fa-stack", "fa-lg", styles.btn)}
                      onClick={() => this.clear("player1")}
                    >
                      <i className="fa fa-circle fa-stack-2x text-danger" />
                      <i
                        className={classnames(
                          "fa",
                          "fa-close",
                          "fa-stack-1x",
                          "fa-inverse"
                        )}
                      />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="row">
                  <input
                    type="text"
                    name="player1"
                    value={values.player1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={styles.player__input}
                    placeholder="github username"
                  />
                  <button
                    type="button"
                    className={styles["submit-btn"]}
                    disabled={errors.player1}
                    onClick={() => this.loadRepo("player1")}
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
            <div className={styles.player}>
              <h3>Player Two</h3>
              {player2 ? (
                <div className={styles["player--selected"]}>
                  <div className={styles.player__info}>
                    <img
                      src={`https://github.com/${player2}.png?size=200`}
                      alt={player2}
                      className={styles.player__avatar}
                    />
                    <span className={styles.player__name}>{player2}</span>
                  </div>
                  <div className={styles["player__close--wrapper"]}>
                    <button
                      type="button"
                      className={classnames("fa-stack", "fa-lg", styles.btn)}
                      onClick={() => this.clear("player2")}
                    >
                      <i className="fa fa-circle fa-stack-2x text-danger" />
                      <i
                        className={classnames(
                          "fa",
                          "fa-close",
                          "fa-stack-1x",
                          "fa-inverse"
                        )}
                      />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="row">
                  <input
                    type="text"
                    name="player2"
                    value={values.player2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={styles.player__input}
                    placeholder="github username"
                  />
                  <button
                    type="button"
                    className={styles["submit-btn"]}
                    disabled={errors.player2}
                    onClick={() => this.loadRepo("player2")}
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className={styles.battle__button}>
            {player1 && player2 && (
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => onBattle(player1, player2)}
                >
                  Battle
                </button>
              </div>
            )}
          </div>
        </form>
      </>
    );
  }
}

export default withFormik({
  validateOnMount: true,
  mapPropsToValues: () => ({
    player1: "",
    player2: ""
  }),
  validate: values => {
    const errors = {};
    console.log("hello", values);
    if (!values.player1) {
      errors.player1 = "不能为空";
    }
    if (!values.player2) {
      errors.player2 = "不能为空";
    }
    return errors;
  },
  handleSubmit: values => {
    console.log("submit", values);
  }
})(Players);
