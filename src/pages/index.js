import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout title="Home | Vinícius Padilha">

      <style jsx>
        {`
          .home {
            padding-top: 145px;
          }

          .profile {
            width: 100px;
            height: 100px;
            overflow: hidden;
            border-radius: 50%;

            &--image {
              width: 100%;
            }
          }

          .username {
            margin-top: 30px;
            margin-bottom: 0;
            font-size: 18px;
            color: var(--dark);
            font-weight: 500;

            &--link {
              color: var(--dark);
            }
          }

          .name {
            font-size: 28px;
            color: var(--dark);
            margin-top: 15px;
            margin-bottom: 0;
          }

          .description {
            font-size: 22px;
            color: var(--secondary);
            margin-top: 10px;
            margin-bottom: 0;
          }

          .country {
            display: inline-block;
            background-color: var(--primary);
            font-size: 14px;
            font-weight: 500;
            padding: 5px 15px 8px 5px;
            margin-top: 30px;
          }
        `}
      </style>

      <div className="home">
        <div className="profile">
          <img className="profile--image" src={require('../images/perfil.jpg')} alt="VP" />
        </div>
        <p className="username">@<a className="username--link" href="https://twitter.com/padvns">padvns</a></p>
        <h2 className="name">Vínicius Padilha</h2>
        <p className="description">- Frontend Developer</p>
        <span className="country">BRASIL, RS</span>
      </div>

    </Layout>
  )
}
