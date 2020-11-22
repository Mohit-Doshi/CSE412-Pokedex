import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';

function compareYear(a, b) {
    const year1 = a.year;
    const year2 = b.year;


    let comparison = 0;
    if(year1 > year2) {
        comparison = 1;
    }
    else if (year1 < year2) {
        comparison = -1;
    }
    return comparison;
}

const GamesTimeline = props => {
    const data = props.data;
    data.sort(compareYear);

  return (
    <React.Fragment>
      <Timeline align="alternate">
      Pokemon Games
      {data.map(elem => (
                    <TimelineItem>
                    <TimelineOppositeContent>
                      <Typography color="textSecondary">{elem.year}</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography>{elem.title}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
      </Timeline>
    </React.Fragment>
  );
}

export default GamesTimeline;
