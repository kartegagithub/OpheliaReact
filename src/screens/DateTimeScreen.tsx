import React, {useState} from 'react';
import {Button, TextInput, TouchableOpacity, View} from 'react-native';
import CustomDateTime from '../components/customDateTime';
import Container from '../shared/fragment/container';
import Content from '../shared/fragment/content';
import moment from 'moment';
import defaultColor from '../constants/style/defaultColor';
import IconUser from '../components/customInput/iconUser';
import IconCalendar from '../components/customDateTime/iconCalandar';

function DateTimeScreen({}) {
  const [dateTime, setDateTime] = useState(new Date());
  const [dateTimeOpen, setDateTimeOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const [timeOpen, setTimeOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateOpen, setDateOpen] = useState(false);
  const [dateInput, setDateInput] = useState(new Date());
  const [dateInputOpen, setDateInputOpen] = useState(false);
  const [dateInputIcon, setDateInputIcon] = useState(new Date());
  const [dateInputIconOpen, setDateInputIconOpen] = useState(false);
  return (
    <Container>
      <Content>
        <View style={{marginTop: 10}}>
          <Button
            color={defaultColor.lightColor}
            title="PICK DATETIME"
            onPress={() => setDateTimeOpen(true)}
          />
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
          <Button
            color={defaultColor.lightColor}
            title="PICK TIME"
            onPress={() => setTimeOpen(true)}
          />
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
          <Button
            color={defaultColor.lightColor}
            title="PICK DATE"
            onPress={() => setDateOpen(true)}
          />
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
              style={{backgroundColor: defaultColor.lightColor, color: 'white'}}
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
        <View style={{marginTop: 10}}>
          <TouchableOpacity onPress={() => setDateInputIconOpen(true)}>
            <TextInput
              value={moment(dateInputIcon)?.format('YYYY/MM/DD')}
              editable={false}
              style={{backgroundColor: defaultColor.lightColor, color: 'white'}}
            />
            <CustomDateTime
              locale={'tr'}
              modal
              open={dateInputIconOpen}
              date={dateInputIcon}
              onCancel={() => {
                setDateInputIconOpen(false);
              }}
              onConfirm={date => {
                setDateInputIconOpen(false);
                setDateInputIcon(date);
              }}
            />
            <View
              style={{
                position: 'absolute',
                right: 0,
                margin: 10,
              }}>
              <IconCalendar color1={'white'} color2={'white'} />
            </View>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
}
export default DateTimeScreen;
