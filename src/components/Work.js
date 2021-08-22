import React from "react";
import styled from "styled-components";
import img4 from "../assets/img4.png";
import {
  HiOutlineBookOpen,
  HiOutlineKey,
  IoMdPaper,
  AiOutlineUser,
} from "react-icons/all";

function Work(props) {
  return (
    <Wrapper>
      <article className="title">
        <h3>Hello my name is hieu</h3>
        <h5>the first time i apply to this job</h5>
      </article>
      <div className="content">
        <ul className="list-work1">
          <li>
            <p>
              <span>
                <HiOutlineBookOpen />
              </span>
              hahahahahsyahschas hash ash hda sdh acshd aasda sdas dasd asdasda
              sda sd asd wqwe asd qwed asc asdsdchs cashc as hahsd ycaheyasdh
            </p>
          </li>
          <li>
            <p>
              <span>
                <HiOutlineKey />
              </span>
              hahahahahsyahschas hash ash hasd awdsd rasdasdwdasd ar asdeqwasd
              qweasdda sdh acshd achs cashc as hahsd ycaheyasdh
            </p>
          </li>
          <li>
            <p>
              <span>
                <IoMdPaper />
              </span>
              hahahahahsyahschasy hash ash asd awdsd rasdasdwdasd ar asdeqwasd
              qweasdhda sdh acshd achs cashc as hahsd caheyasdh
            </p>
          </li>
        </ul>
        <article className="img-center">
          <img src={img4} alt="color" />
        </article>
        <ul className="list-work2">
          <li>
            <p>
              <span>
                <AiOutlineUser />
              </span>
              hahahahahsyahschas hash ash hdaasd awdsd rasdasdwdasd ar asdeqwasd
              qweasd sdh acshd achs cashc as hahsd ycaheyasdh
            </p>
          </li>
          <li>
            <p>
              <span>
                <HiOutlineBookOpen />
              </span>
              hahahahahsyahschasy hash ash hasd awdsd rasdasdwdasd ar asdeqwasd
              qweasdda sdh acshd achs cashc as hahsd caheyasdh
            </p>
          </li>
          <li>
            <p>
              <span>
                <HiOutlineBookOpen />
              </span>
              hahahahahsyahschas hash ash hdaasd awdsd rasdasdwdasd ar asdeqwasd
              qweasd sdh acshd achs cashc as hahsd ycaheyasdh
            </p>
          </li>
        </ul>
      </div>
      <button className="btn">please recruit me</button>
      <hr />
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 5rem;
  display: flex;
  height: 100vh;

  flex-direction: column;
  p {
    color: var(--clr-grey-5);
  }
  p: hover {
    color: var(--clr-grey-2);
    cursor: pointer;
  }
  span {
    color: var (--clr-grey-1);
  }
  svg {
    font-size: 2rem;
    display: block;
  }

  .title {
    margin-bottom: 5rem;
    margin-top: 5rem;
  }
  .img-center {
    margin: auto;
  }
  .content {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 2fr 1fr;
  }
  .list-work1 {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  .list-work2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .btn {
    width: 200px;
    margin: 3rem auto;
    border-radius: 20px;
  }
`;

export default Work;
