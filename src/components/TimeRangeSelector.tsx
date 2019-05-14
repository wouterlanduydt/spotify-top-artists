import React from 'react';
import styled, { css } from 'styled-components';
import { ETimeRange } from 'types/general';
import { connect } from 'react-redux';
import { getTopArtistsStart } from 'redux/actions';
import { IState } from 'redux/reducers';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 0;
`;

const Button = styled.button<{ isSelected: boolean }>`
  border: none;
  ${({ isSelected }) =>
    isSelected
      ? css`
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
        `
      : css`
          background-color: white;
          color: rgba(0, 0, 0, 0.8);
        `} padding: 4px 12px;
  font-size: 3.8vw;
  font-weight: 500;
  margin: 0;
  border: 2px solid rgba(0, 0, 0, 0.8);
  transition: all 200ms ease-in-out;

  &:first-child {
    border-radius: 4px 0 0 4px;
  }

  &:last-child {
    border-radius: 0 4px 4px 0;
  }

  &:nth-child(2) {
    margin: 0 -2px;
  }

  &:hover,
  &:focus {
    outline: none;
    cursor: pointer;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
  }

  @media (min-width: 400px) {
    font-size: 1.4em;
  }
`;

type TProps = {
  timeRange: ETimeRange;
  setTimeRange: (timeRange: ETimeRange) => void;
  getTopArtistsStart: (timeRange: ETimeRange) => void;
  artists: IState['artists'];
};

const TimeRangeSelector = ({ timeRange, setTimeRange, getTopArtistsStart, artists }: TProps) => (
  <Wrapper>
    {Object.values(ETimeRange).map((timeRangeItem: ETimeRange) => (
      <Button
        key={timeRangeItem}
        isSelected={timeRangeItem === timeRange}
        onClick={() => {
          if (!artists[timeRangeItem].value) getTopArtistsStart(timeRangeItem);
          setTimeRange(timeRangeItem);
        }}
      >
        {timeRangeItem}
      </Button>
    ))}
  </Wrapper>
);

export default connect(
  ({ artists }: IState) => ({ artists }),
  { getTopArtistsStart },
)(React.memo(TimeRangeSelector));
