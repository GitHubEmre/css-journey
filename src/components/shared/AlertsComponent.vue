<template>
    <div class="fixed top-8 left-8 h-[232px] overflow-hidden">
        <transition-group name="fade" tag="div">
            <div v-for="(alert) in alerts" :key="alert.id" class="bg-orange text-white-real font-bold px-4 py-2 rounded shadow-md mb-2">
                {{ alert.message }}
            </div>
        </transition-group>
    </div>
</template>
  
<script lang="ts">
import { Alert } from "../../interfaces/Alert";

export default {
    name: 'AlertsComponent',
    data() {
        return {
            alerts: [] as Alert[],
            nextId: 1,
            limitOfShownAlerts: 5,
            durationOfAlert: 3000
        };
    },
    methods: {
        addAlert(message: string) {
            if (this.alerts.length >= this.limitOfShownAlerts) {
                this.alerts.shift();
            }
            const alert = { id: this.nextId++, message };
            this.alerts.push(alert);
    
            setTimeout(() => {
                this.removeAlert(alert.id);
            }, this.durationOfAlert);
        },
        removeAlert(id: number) {
            this.alerts = this.alerts.filter((alert) => alert.id !== id);
        }
    }
};
</script>
  
<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
  