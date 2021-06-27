import  styled  from "styled-components";
import React from "react";
import { useStateProviderValue } from "../StateProvider";

const BannerBody = styled.section`
    color: #ffffff;
    display: flex;
    align-items: flex-end;
    padding: 10px;
`;

const DiscoverWeekly = styled.img`
    height: 20vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px rgba(0,0,0, 0.5);
`;
const BannerText = styled.div`
    flex: 1;

    & > h2{
        font-size: 48px;
        margin-bottom: 10px;
    }
    & > p{
        font-size: 14px;
    }
`;
export const Banner = () => {

const [{discover_weekly}, dispatch] = useStateProviderValue();

  return (
    <BannerBody>
      <DiscoverWeekly
        src={discover_weekly?.images[0].url}
        alt=""
      />
      <BannerText>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
      </BannerText>
    </BannerBody>
  );
};
