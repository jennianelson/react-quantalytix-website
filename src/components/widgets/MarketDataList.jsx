import React from 'react';
import { MarketDataListItem } from '../parts';

const MarketDataList = () => {
  return (
    <ul class="market-data-list">
      <MarketDataListItem
        image="ridiculously-fast-data.svg"
        heading="Ridiculously fast data"
        description="made accessible through familiar tools like Excel, Qlik, and Tableau."
      />
      <MarketDataListItem
        image="gorgeous.svg"
        heading="Gorgeous, intuitive dashboards"
        description="for key strategic management and key performance indicator (KPI) tracking."
      />
      <MarketDataListItem
        image="simplified-access.svg"
        heading="Simpliﬁed access"
        description="to market data including GNMA loan level data!"
      />
    </ul>
  )
}

export default MarketDataList;