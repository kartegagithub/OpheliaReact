import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Container from '../shared/fragment/container';
import CustomText from '../components/customText';
import Content from '../shared/fragment/content';
import CustomCodeEditor from '../components/customCodeEditor';
import detailScreenStyle from './styles/detailScreenStyle';

function DetailScreen({route}) {
  const {title, description, usageDescription, installDescription} =
    route?.params;
  return (
    <Container>
      <Content>
        <CustomText style={detailScreenStyle.title}>{title}</CustomText>
        {description && (
          <>
            <CustomText style={detailScreenStyle.subTitle}>Açıklama</CustomText>
            <CustomText>{description}</CustomText>
          </>
        )}
        {installDescription && (
          <>
            <CustomText style={detailScreenStyle.subTitle}>
              Kurulum Bilgisi
            </CustomText>
            <CustomText>{installDescription}</CustomText>
          </>
        )}
        {usageDescription &&
          (usageDescription?.description ||
            usageDescription?.codes?.length > 0) && (
            <>
              {usageDescription?.description && (
                <>
                  <CustomText style={detailScreenStyle.subTitle}>
                    Kullanım Bilgisi
                  </CustomText>
                  <CustomText>{usageDescription?.description}</CustomText>
                </>
              )}
              <CustomText style={detailScreenStyle.subTitle}>
                Kod Örnekleri
              </CustomText>
              {usageDescription?.codes?.map((item, index) => (
                <CustomCodeEditor initialValue={item} key={index} />
              ))}
            </>
          )}
      </Content>
    </Container>
  );
}
export default DetailScreen;
