import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgCalendarModule  } from 'ionic2-calendar';
import { Missiondetails } from '../missiondetails/missiondetails';

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  constructor(public navCtrl: NavController) {
    this.loadMyEvents()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Calendar');
  }
    eventSource;
    viewTitle;

    isToday:boolean;
    calendar = {
        mode: 'month',
        currentDate: new Date()
    };

    loadEvents() {
      // this.eventSource = this.createRandomEvents();
      this.eventSource = this.loadMyEvents();
    }

    onViewTitleChanged(title) {
      this.viewTitle = title;
    }

    onEventSelected(event) {
      this.goToMissionList(event.id);
      console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    }

    changeMode(mode) {
      this.calendar.mode = mode;
    }

    today() {
      this.calendar.currentDate = new Date();
    }

    onTimeSelected(ev) {
      console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    }

    onCurrentDateChanged(event:Date) {
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      event.setHours(0, 0, 0, 0);
      this.isToday = today.getTime() === event.getTime();
    }

    createRandomEvents() {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            } else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    }

    onRangeChanged(ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    }

    markDisabled = (date:Date) => {
        var current = new Date();
        current.setHours(0, 0, 0);
        return date < current;
    };

    loadMyEvents() {
        var events = [];
        var startTime;
        var endTime;
        startTime = new Date(Date.UTC(2017, 3, 15));
        endTime = new Date(Date.UTC(2017, 3, 16));
//        endTime = new Date(Date.UTC(2017, 4, 4));
        events.push({
            title: 'Brgy Diliman, Diliman Quezon City',
            startTime: startTime,
            endTime: endTime,
            allDay: true,
            id: 1
        });

        startTime = new Date(Date.UTC(2017, 3, 15));
        endTime = new Date(Date.UTC(2017, 3, 16));
//        endTime = new Date(Date.UTC(2017, 3, 16));
        events.push({
            title: 'Carranglan, Nueva Ecija',
            startTime: startTime,
            endTime: endTime,
            allDay: true,
            id: 2
        });

        startTime = new Date(Date.UTC(2017, 3, 22));
        endTime = new Date(Date.UTC(2017, 3, 23));
//        endTime = new Date(Date.UTC(2017, 3, 29));
        events.push({
            title: 'Marikina, 1807 Metro Manila',
            startTime: startTime,
            endTime: endTime,
            allDay: true,
            id: 3
        });

        startTime = new Date(Date.UTC(2017, 3, 7));
        endTime = new Date(Date.UTC(2017, 3, 8));
//        endTime = new Date(Date.UTC(2017, 3, 21));
        events.push({
            title: 'San Pablo City, Laguna',
            startTime: startTime,
            endTime: endTime,
            allDay: true,
            id: 4
        });

        startTime = new Date(Date.UTC(2017, 4, 4));
        endTime = new Date(Date.UTC(2017, 4, 5));
//        endTime = new Date(Date.UTC(2017, 4, 11));
        events.push({
            title: 'Angeles, Pampanga',
            startTime: startTime,
            endTime: endTime,
            allDay: true,
            id: 5
        });

        startTime = new Date(Date.UTC(2017, 4, 4));
        endTime = new Date(Date.UTC(2017, 4, 5));
//        endTime = new Date(Date.UTC(2017, 4, 20));
        events.push({
            title: 'Norzagaray, Bulacan',
            startTime: startTime,
            endTime: endTime,
            allDay: true,
            id: 6
        });

        startTime = new Date(Date.UTC(2017, 0, 11));
        endTime = new Date(Date.UTC(2017, 0, 12));
//        endTime = new Date(Date.UTC(2017, 0, 11));
        events.push({
            title: 'San Jose, Batangas',
            startTime: startTime,
            endTime: endTime,
            allDay: true,
            id: 7
        });

        startTime = new Date(Date.UTC(2017, 1, 11));
        endTime = new Date(Date.UTC(2017, 1, 12));
//        endTime = new Date(Date.UTC(2017, 1, 21));
        events.push({
            title: 'Calapan, Oriental Mindoro',
            startTime: startTime,    
            endTime: endTime,
            allDay: true,
            id: 8
        });

        startTime = new Date(Date.UTC(2017, 4, 24));
        endTime = new Date(Date.UTC(2017, 4, 25));
//        endTime = new Date(Date.UTC(2017, 5, 11));
        events.push({
            title: 'Boac, Marinduque',
            startTime: startTime,
            endTime: endTime,
            allDay: true,
            id: 9
        });

        startTime = new Date(Date.UTC(2017, 4, 30));
        endTime = new Date(Date.UTC(2017, 4, 31));
//        endTime = new Date(Date.UTC(2017, 5, 30));
        events.push({
            title: 'Blumentritt, San Juan Manila',
            startTime: startTime,
            endTime: endTime,
            allDay: true,
            id: 10
        });

        startTime = new Date(Date.UTC(2017, 2, 4));
        endTime = new Date(Date.UTC(2017, 2, 5));
//        endTime = new Date(Date.UTC(2017, 2, 13));
        events.push({
            title: 'Brgy Pao, Camiling Tarlac',
            startTime: startTime,
            endTime: endTime,
            allDay: true,
            id: 11
        });

        startTime = new Date(Date.UTC(2017, 5, 13));
        endTime = new Date(Date.UTC(2017, 5, 14));
//        endTime = new Date(Date.UTC(2017, 5, 14));
        events.push({
            title: 'Capaclan, Romblon',
            startTime: startTime,
            endTime: endTime,
            allDay: true,
            id: 12
        });

        startTime = new Date(Date.UTC(2017, 2, 14));
        endTime = new Date(Date.UTC(2017, 2, 15));
//        endTime = new Date(Date.UTC(2017, 3, 14));
        events.push({
            title: 'Polillo, Quezon',
            startTime: startTime,
            endTime: endTime,
            allDay: true,
            id: 13
        });

        startTime = new Date(Date.UTC(2017, 6, 1));
        endTime = new Date(Date.UTC(2017, 6, 2));
//        endTime = new Date(Date.UTC(2017, 6, 4));
        events.push({
            title: 'Brgy Holy Spirit, QC',
            startTime: startTime,
            endTime: endTime,
            allDay: true,
            id: 14
        });

        startTime = new Date(Date.UTC(2017, 6, 7));
        endTime = new Date(Date.UTC(2017, 6, 8));
//        endTime = new Date(Date.UTC(2017, 6, 21));
        events.push({
            title: 'Trece Martires, Cavite',
            startTime: startTime,
            endTime: endTime,
            allDay: true,
            id: 15
        });

        return events;
    }

    goToMissionList(missionId){
        this.navCtrl.push(Missiondetails, missionId);
        console.log("send mission: " + missionId)
    }

}
