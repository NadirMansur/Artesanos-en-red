import style from "./ContactPage.module.css";

const ContactPage = (props) => {
  return(
    <div>
      <header>
        <img src={props.src} alt={props.alt}></img>
      </header>
      <main>
        <section className={style.hero}>
          <h1>{props.leyenda1}</h1>
          <p className={style.subtitle}>{props.leyenda2}</p>
        </section>
        <section className={style.formContainer}>
          <form>
            <div className={style.formRow}>
              <div className={style.formElement}>
                <label for='name'>{props.name}</label>
                <input
                  type='text'
                  id='name'
                  className={style.nameInput}
                  placeholder='Nomrbe Apellido'
                ></input>
              </div>
              <div className={style.formElement}>
                <label for='email'>{props.email}</label>
                <input
                  type='email'
                  id='email'
                  className={style.emailInput}
                  placeholder='ejemplo@ejemplo.com'
                ></input>
              </div>
              <div className={style.formElement}>
                <label for='subject'>{props.subject}</label>
                <select name='subject' id='subject'>
                  <option value='building-landing-pages'>{props.op1}</option>
                  <option value='making-connections'>{props.op2}</option>
                  <option value='business-inquiries'>{props.op3}</option>
                </select>
              </div>
            </div>
            <div className={style.formElement}>
              <label for='message'>{props.message}</label>
              <textarea
                name='message'
                id='message'
                cols='30'
                rows='10'
              ></textarea>
            </div>
            <button type='submit' className={style.contactBtn}>
              {props.btnLeynda}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
