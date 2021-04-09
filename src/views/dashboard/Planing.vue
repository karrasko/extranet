<template>
  <v-container
    id="calendar"
    fluid
    tag="section"
    flat
  >
    <base-v-component
      heading=" Planing"
      link="components/calendars"
      flat
    />

    <v-row>
      <v-col
        cols="12"
        md="10"
        class="mx-auto"
        flat
      >
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>{{ timestamp }}



              <!-- <div id = "intro" style = "text-align:center;">
                <h1>{{ timestamp }}</h1>
                </div> -->
            </v-toolbar-title>

            <v-spacer />

            <calendar-btn
              v-for="(t, i) in types"
              :key="i"
              @click="type = t"
            >
              {{ t }}
            </calendar-btn>

            <v-spacer />

            <calendar-btn @click="$refs.calendar.prev()">
              <v-icon>mdi-chevron-left</v-icon>
            </calendar-btn>

            <calendar-btn @click="$refs.calendar.next()">
              <v-icon>mdi-chevron-right</v-icon>
            </calendar-btn>
          </v-toolbar>

          <v-sheet
            height="623"
            flat
            class="mt-5"
          >
           <iframe src='https://acmixerpack-my.sharepoint.com/:x:/g/personal/manueljesus_carrasco_mixerpack_es/EXfF_IdaBEFFr6ut9Hy7P-EBI4ySunzPm7eN3sGrb5UYDQ?e=0wEcjj&action=embedview'
                     width='100%' 
                     height='100%' 
                     frameborder='0'>
                   
           </iframe>
            <!-- <v-calendar
              ref="calendar"
              v-model="calendar"
              :events="events"
              :type="type"
              event-color="primary"
              now="2019-01-08"
            /> -->
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Components
  import { VBtn } from 'vuetify/lib'

  export default {
    name: 'DashboardCalendar',

    components: {
      CalendarBtn: {
        extends: VBtn,

        props: {
          color: {
            type: String,
            default: 'secondary'
          },
          minWidth: {
            type: Number,
            default: 0
          },
          rounded: {
            type: Boolean,
            default: true
          }
        },

        computed: {
          classes() {
            return {
              ...VBtn.options.computed.classes.call(this),
              'mx-1': true,
              'text-lowercase': true
            }
          }
        }
      }
    },
         created() {
                setInterval(this.getNow, 1000);
            },
            methods: {
                getNow: function() {
                  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
                    const today = new Date();
                    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    const dateTime = date +' '+ time;
                    this.timestamp = dateTime;
                     const d = new Date();
                    // document.write("The current month is " + monthNames[d.getMonth()]);
                }
               

            },
    data: () => ({
      calendar: '2019-01-08',
      disabled: true,
      events: [
        {
          name: 'Vacation',
          start: '2018-12-30',
          end: '2019-01-02'
        },
        {
          name: 'Meeting',
          start: '2019-01-07'
        },
        {
          name: '30th Birthday',
          start: '2019-01-03'
        },
        {
          name: 'New Year',
          start: '2019-01-01'
        },
        {
          name: 'Conference',
          start: '2019-01-21'
        },
        {
          name: 'Hackathon',
          start: '2019-01-30',
          end: '2019-02-01'
        }
      ],
      timestamp: "",
   //   monthNames: ["January", "February", "March", "April", "May", "June",
   //  "July", "August", "September", "October", "November", "December"
   //         ],
      focus: '',
      type: 'month',
      types: [
        'month',
        'week',
        'day'
      ]
    })
  }
</script>

<style lang="sass">
  #calendar
    .v-calendar-weekly__day:last-child,
    .v-calendar-weekly__head-weekday:last-child
      border-right: none

    .v-calendar-weekly__week:last-child .v-calendar-weekly__day
      border-bottom: none
</style>
