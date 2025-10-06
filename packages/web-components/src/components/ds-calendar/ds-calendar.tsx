import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-calendar',
  styleUrl: 'ds-calendar.css',
  shadow: true,
})
export class DsCalendar {
  @Prop() selectedDate?: string;
  @Prop() minDate?: string;
  @Prop() maxDate?: string;
  @Prop() disabled: boolean = false;

  @Event() dsDateSelect: EventEmitter<string>;

  private viewDate: Date = new Date();

  componentWillLoad() {
    if (this.selectedDate) {
      this.viewDate = new Date(this.selectedDate);
    }
  }

  private getDaysInMonth(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  private getFirstDayOfMonth(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  private handleDateSelect(day: number) {
    if (this.disabled) return;
    
    const selected = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), day);
    const dateString = selected.toISOString().split('T')[0];
    
    if (this.minDate && selected < new Date(this.minDate)) return;
    if (this.maxDate && selected > new Date(this.maxDate)) return;
    
    this.dsDateSelect.emit(dateString);
  }

  private previousMonth() {
    this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() - 1);
    this.forceUpdate();
  }

  private nextMonth() {
    this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1);
    this.forceUpdate();
  }

  private forceUpdate() {
    this.viewDate = new Date(this.viewDate);
  }

  private isSelected(day: number): boolean {
    if (!this.selectedDate) return false;
    const selected = new Date(this.selectedDate);
    return (
      selected.getDate() === day &&
      selected.getMonth() === this.viewDate.getMonth() &&
      selected.getFullYear() === this.viewDate.getFullYear()
    );
  }

  private isToday(day: number): boolean {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === this.viewDate.getMonth() &&
      today.getFullYear() === this.viewDate.getFullYear()
    );
  }

  private isDisabled(day: number): boolean {
    const date = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), day);
    if (this.minDate && date < new Date(this.minDate)) return true;
    if (this.maxDate && date > new Date(this.maxDate)) return true;
    return false;
  }

  render() {
    const daysInMonth = this.getDaysInMonth(this.viewDate);
    const firstDay = this.getFirstDayOfMonth(this.viewDate);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div class="calendar-day empty"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = this.isSelected(day);
      const isToday = this.isToday(day);
      const isDisabled = this.disabled || this.isDisabled(day);
      
      days.push(
        <button
          class={{
            'calendar-day': true,
            'selected': isSelected,
            'today': isToday,
            'disabled': isDisabled,
          }}
          onClick={() => this.handleDateSelect(day)}
          disabled={isDisabled}
        >
          {day}
        </button>
      );
    }

    return (
      <Host class={{ 'disabled': this.disabled }}>
        <div class="calendar">
          <div class="calendar-header">
            <button class="nav-button" onClick={() => this.previousMonth()} disabled={this.disabled}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor"/>
              </svg>
            </button>
            <div class="month-year">
              {monthNames[this.viewDate.getMonth()]} {this.viewDate.getFullYear()}
            </div>
            <button class="nav-button" onClick={() => this.nextMonth()} disabled={this.disabled}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.1584 3.13514C6.35985 2.94628 6.67627 2.95648 6.86513 3.15794L10.6151 7.15794C10.7954 7.35027 10.7954 7.64955 10.6151 7.84188L6.86513 11.8419C6.67627 12.0433 6.35985 12.0535 6.1584 11.8647C5.95694 11.6758 5.94673 11.3594 6.13559 11.1579L9.565 7.49991L6.13559 3.84188C5.94673 3.64042 5.95694 3.32401 6.1584 3.13514Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
          <div class="calendar-weekdays">
            {dayNames.map(day => <div class="weekday">{day}</div>)}
          </div>
          <div class="calendar-days">
            {days}
          </div>
        </div>
      </Host>
    );
  }
}
