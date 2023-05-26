import React, {useState} from 'react';
import {Button, TextInput, TouchableOpacity, View} from 'react-native';
import CustomDateTime from '../components/customDateTime';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import moment from 'moment';

function DateTimeScreen({}) {
  const [dateTime, setDateTime] = useState(new Date());
  const [dateTimeOpen, setDateTimeOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const [timeOpen, setTimeOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateOpen, setDateOpen] = useState(false);
  const [dateInput, setDateInput] = useState(new Date());
  console.log({dateInput});
  const [dateInputOpen, setDateInputOpen] = useState(false);

  return (
    <Container>
      <Content>
        <View style={{marginTop: 10}}>
          <Button title="PICK DATETIME" onPress={() => setDateTimeOpen(true)} />
          <CustomDateTime
            mode={'datetime'}
            maximumDate={new Date('2021-12-31')}
            modal
            open={dateTimeOpen}
            date={dateTime}
            onCancel={() => {
              setDateTimeOpen(false);
            }}
            onConfirm={(date: any) => {
              setDateTimeOpen(false);
              setDateTime(date);
            }}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Button title="PICK TIME" onPress={() => setTimeOpen(true)} />
          <CustomDateTime
            mode="time"
            modal
            open={timeOpen}
            date={time}
            onCancel={() => {
              setTimeOpen(false);
            }}
            onConfirm={(date: any) => {
              setTimeOpen(false);
              setTime(date);
            }}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Button title="PICK DATE" onPress={() => setDateOpen(true)} />
          <CustomDateTime
            mode="date"
            maximumDate={new Date('2021-12-31')}
            minimumDate={new Date('2021-01-01')}
            modal
            open={dateOpen}
            date={date}
            onCancel={() => {
              setDateOpen(false);
            }}
            onConfirm={(date: any) => {
              setDateOpen(false);
              setDate(date);
            }}
          />
        </View>
        <View style={{marginTop: 10}}>
          <TouchableOpacity onPress={() => setDateInputOpen(true)}>
            <TextInput
              value={moment(dateInput)?.format('YYYY/MM/DD')}
              editable={false}
              style={{backgroundColor: 'pink'}}
            />
            <CustomDateTime
              locale={'tr'}
              modal
              open={dateInputOpen}
              date={dateInput}
              onCancel={() => {
                setDateInputOpen(false);
              }}
              onConfirm={date => {
                setDateInputOpen(false);
                setDateInput(date);
              }}
            />
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
}
export default DateTimeScreen;
