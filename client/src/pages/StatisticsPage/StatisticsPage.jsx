import { useState } from 'react';
import { addDays, format, getDate, getMonth, getYear, subDays } from 'date-fns';
import { useGetTasksQuery } from 'store/tasks/tasksApi';
import { useTranslation } from 'react-i18next';

import Loader from 'components/shared/Loader/Loader';
import PeriodPaginator from 'components/shared/PeriodPaginator/PeriodPaginator';

import StatisticsChart from './StatisticsChart/StatisticsChart';

import {
  StatisticsPageStyles,
  StatisticsHeadWrapper,
  Legend,
  LegendItem,
  Ellipse,
  LegendText
} from './StatisticsPage.styled';

const StatisticsPage = () => {
  const { t } = useTranslation();
  const [currentDate, setCurrentDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  const {
    data: tasks,
    isLoading,
    isFetching
  } = useGetTasksQuery({
    year: getYear(new Date(currentDate)),
    month: getMonth(new Date(currentDate)) + 1,
    day: getDate(new Date(currentDate))
  });

  const onPrev = () => {
    const newDate = subDays(new Date(currentDate), 1);
    setCurrentDate(format(new Date(newDate), 'yyyy-MM-dd'));
  };

  const onNext = () => {
    const newDate = addDays(new Date(currentDate), 1);
    setCurrentDate(format(new Date(newDate), 'yyyy-MM-dd'));
  };

  return (
    <StatisticsPageStyles>
      <StatisticsHeadWrapper>
        <PeriodPaginator
          prevHandler={onPrev}
          nextHandler={onNext}
          type="day"
          date={currentDate}
          setCurrentDate={setCurrentDate}
        />
        <Legend>
          <LegendItem>
            <Ellipse type="day" />
            <LegendText>{t('By Day')}</LegendText>
          </LegendItem>
          <LegendItem>
            <Ellipse type="month" />
            <LegendText>{t('By Month')}</LegendText>
          </LegendItem>
        </Legend>
      </StatisticsHeadWrapper>
      {!isLoading && !isFetching && Boolean(tasks) ? <StatisticsChart tasks={tasks} /> : <Loader />}
    </StatisticsPageStyles>
  );
};

export default StatisticsPage;
