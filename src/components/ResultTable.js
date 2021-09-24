import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

export default class ResultTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['DATE', 'TEST', 'CORRECT', 'INCORRECT', 'NOT ANSWERED', 'SCORE', '', '', '',],
      widthArr: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140,]
    }
  }

  render() {
    const state = this.state;
    const data = [];

    //Add some test data for result table
    //map
    //change dataRow value to add more data by row
    //each change needs data.push(dataRow)

    //Example add gradually 00 to 199
    for (let i = 0; i < 20; i += 1) {
      const dataRow = [];
      for (let j = 0; j < 10; j += 1) {
        dataRow.push(`${i}${j}`);
      }
      data.push(dataRow);
    }

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.head} textStyle={styles.headText}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {
                  data.map((dataRow, index) => (
                    <Row
                      key={index}
                      data={dataRow}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#ffffff'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    paddingTop: 0.3,
    bottom: 3,
    backgroundColor: '#ffffff',
  },
  head: { 
    height: 50, 
    backgroundColor: '#6360FF',
  },
  text: { 
    textAlign: 'center', 
    fontWeight: 'normal',
  },
  headText: { 
    textAlign: 'center', 
    fontWeight: 'normal',
    color: 'white'
  },
  dataWrapper: { 
    marginTop: -1 
  },
  row: { 
    height: 40, 
    backgroundColor: '#F7F8FA' 
  }
});