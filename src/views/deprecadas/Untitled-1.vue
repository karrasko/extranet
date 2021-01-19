<v-col
        cols="12"
        sm="6"
        md="4"
      >
        <base-material-card
          color="success"
          icon="mdi-calendar-today"
        >
          <template v-slot:after-heading>
            <div class="display-1 mt-2 font-weight-light">
              Date Picker <span class="body-1">— labeled</span>
            </div>
          </template>

          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            min-width="290px"
            offset-y
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                color="secondary"
                label="Select date"
                prepend-icon="mdi-calendar-outline"
                readonly
                v-on="on"
              />
            </template>

            <v-date-picker
              v-model="date"
              color="secondary"
              landscape
              scrollable
            >
              <v-spacer />
              <v-btn
                color="secondary"
                large
                @click="menu = false"
              >
                Cancel
              </v-btn>

              <v-btn
                color="secondary"
                large
                @click="$refs.menu.save(date)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </base-material-card>
      </v-col>