import { ChangeDetectorRef, ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from "@angular/forms";

export class FabricCheckboxChange {
  source: FabricCheckbox;
  checked: boolean;
}

/**
 * Provider Expression that allows fabric-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 */
export const FABRIC_CHECKBOX_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FabricCheckbox),
  multi: true
};

@Component({
  selector: 'fabric-checkbox',
  styleUrls: ['checkbox.component.scss'],
  templateUrl: 'checkbox.component.html',
  providers: [FABRIC_CHECKBOX_CONTROL_VALUE_ACCESSOR],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FabricCheckbox implements ControlValueAccessor {
  @Input() required: boolean;
  @Input() control: FormControl = new FormControl();
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() name: string;
  @Input() get checked() {
    return this._checked;
  }

  set checked(checked: boolean) {
    if (checked != this.checked) {
      
      this._checked = checked;
      this._changeDetectorRef.markForCheck();
    }
  }

  @Output() change: EventEmitter<FabricCheckboxChange> = new EventEmitter<FabricCheckboxChange>();

  private _checked: boolean = false;
  private controlValueAccessorChangeFn: (value: any) => void = (value) => {};

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() { }

  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value Value to be set to the model.
   */
  writeValue(value: any) {
    console.log(value);
    this.checked = value;
  }

  /**
   * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
   */
  onTouched: () => any = () => {};

  /**
   * Registers a callback to be triggered when the value has changed.
   * Implemented as part of ControlValueAccessor.
   * @param fn Function to be called on change.
   */
  registerOnChange(fn: (value: any) => void) {
    this.controlValueAccessorChangeFn = fn;
  }

  /**
   * Registers a callback to be triggered when the control has been touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be triggered when the checkbox is touched.
   */
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  toggle(): void {
    this.checked = !this.checked;
  }

  onClick(event: Event) {
    event.stopPropagation();

    if (!this.disabled) {
      this.toggle();

      // Emit our custom change event if the native input emitted one.
      // It is important to only emit it, if the native input triggered one, because
      // we don't want to trigger a change event, when the `checked` variable changes for example.
      this.emitChangeEvent();
    }
  }

  private emitChangeEvent() {
    let event = new FabricCheckboxChange();
    event.source = this;
    event.checked = this.checked;

    this.controlValueAccessorChangeFn(this.checked);
    this.change.emit(event);
  }
}