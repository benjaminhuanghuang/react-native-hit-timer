import React from "react";
import { StyleSheet, View } from "react-native";

interface RowContainerProps {
    children: any
    height?:number
}

export const RowContainer: React.SFC<RowContainerProps> = ({ children, height }) : JSX.Element=> {
  return <View style={[styles.rowContainer, {height}]}>{children}</View>
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-around",
    marginTop: 30
  }
});