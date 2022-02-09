<template>
  <div class="fh5co-section">
    <div class="container">
      <div class="row">
        <div :class="cols" v-for="(member, key) in team" :key="`member-${key}`">
          <img :src="member.img" :alt="member.name" class="img-responsive" />
          <h3>{{ member.name }}</h3>
          <h4>{{ member.rank }}</h4>
          <p>{{ member.description }}.</p>
          <ul class="fh5co-social">
            <li>
              <a :href="`mailto:${member.email}`">
                <i class="icon-envelope"></i>
                {{ member.email }}
              </a>
            </li>
            <li>
              <a :href="`tel:${member.phone}`">
                <i class="icon-phone"></i>
                {{ member.phone }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType } from 'vue'

export interface TeamMember {
  name: string;
  rank: string;
  img: string;
  phone: string;
  email: string;
  description: string;
}

/**
 * TeamSection
 */
export default defineComponent({
  name: 'TeamSection',
  props: {
    team: {
      type: Array as PropType<TeamMember[]>,
      default: () => []
    }
  }, setup(_props) {

    const cols = computed(() => {
      // if (_props.team.length === 2) {
      //   return 'col-md-6 fh5co-staff';
      // } else
      return 'col-md-4 col-sm-6 fh5co-staff';

    })
    return {
      ..._props, cols
    }
  }
});
</script>