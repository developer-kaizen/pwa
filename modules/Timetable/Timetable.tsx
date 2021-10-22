import * as Styled from './styles';

const Timetable = (props: any) => {
    const days = props?.moduleTimetable?.daysCollection?.items;

    if (!days) {
        return null;
    }

    if (days?.length < 1) {
        return null;
    }

    return (
        <Styled.Container>
            <Styled.Headline>{props?.moduleTimetable?.title}</Styled.Headline>

            <Styled.Table>
                {days?.map((day: any) => {
                    return (
                        <Styled.Row>
                            <Styled.Cell>
                                <Styled.Day>{day?.name}</Styled.Day>
                            </Styled.Cell>

                            {day?.unitsCollection?.items?.map((unit: any) => {
                                return (
                                    <Styled.Cell>
                                        <Styled.Time>{unit?.time}</Styled.Time>
                                        <Styled.Session>{unit?.name}</Styled.Session>
                                        <Styled.Trainer>
                                            {unit?.trainer && (
                                                <>
                                                    mit: <br />
                                                </>
                                            )}
                                            {unit?.trainer}
                                        </Styled.Trainer>
                                    </Styled.Cell>
                                );
                            })}
                        </Styled.Row>
                    );
                })}
            </Styled.Table>
        </Styled.Container>
    );
};

export default Timetable;
