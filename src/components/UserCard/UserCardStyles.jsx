import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--CardDF);
  border-radius: var(--borderRad);

  width: 90%;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 3rem 0;

  background-color: var(--UserCard);
  border-radius: var(--borderRad);
`;

export const UserImage = styled.img`
  width: 20%;
  border: 2px solid white;
  border-radius: 50%;
  margin-left: 3rem;
`;

export const UserInfo = styled.div`
  display: grid;
  gap: 0.8rem;
`;

export const Report = styled.p`
  font-weight: 100;
  font-size: 1.3rem;
  opacity: 0.7;
`;

export const UserName = styled.h1`
  font-weight: lighter;
  font-size: 2.6rem;
`;