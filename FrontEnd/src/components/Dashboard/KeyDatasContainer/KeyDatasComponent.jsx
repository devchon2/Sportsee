import style from "./KeyDatasComponent.module.css";

export default function KeyDatasComponent({ data }) {
  if (data !== undefined) {
    return (
      <div className={style.keyDatasDiv}>
        {data.map((keyData) => {
          return (
            <article key={Math.random()} className={style.keyData}>
              <img
                className={style.keyDataIcon}
                src={keyData.icon}
                alt={`${keyData.type} icone`}
              />
              <div className={style.keyDataTextContainer}>
                <p className={style.keyDataName}>
                  {keyData.type === "caloriesCount"
                    ? "Calories"
                    : keyData.type === "proteinCount"
                    ? "Protéines"
                    : keyData.type === "carbohydrateCount"
                    ? "Glucides"
                    : "Lipides"}
                </p>
                <p className={style.keyDataValue}>
                  {keyData.value + keyData.unit}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    );
  }
}
