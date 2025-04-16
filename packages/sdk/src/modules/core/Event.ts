import { AugmentedEvent } from '@polkadot/api/types';
import { FrameSystemEventRecord } from '@polkadot/types/lookup';

/**
 * Extracts the named arguments type from an AugmentedEvent.
 * If the event does not have a named argument type, resolves to never.
 *
 * @template E - The event type.
 */
export type EventNamedArgs<E> = E extends AugmentedEvent<
  'promise',
  any,
  infer Named
>
  ? unknown extends Named
    ? never
    : Named
  : never;

/**
 * Extracts the tuple arguments type from an AugmentedEvent.
 *
 * @template E - The event type.
 */
export type EventTupleArgs<E> = E extends AugmentedEvent<
  'promise',
  infer Tuple,
  any
>
  ? Tuple
  : never;

export type EventType = AugmentedEvent<'promise', any, any>;

/**
 * Determines the parsed event data type.
 * If the event has named arguments, those are used.
 * Otherwise, the tuple arguments are used.
 *
 * @template E - The event type.
 */
export type ParsedEventData<E> = EventNamedArgs<E> extends never
  ? EventTupleArgs<E>
  : EventNamedArgs<E>;

export class Event {
  /**
   * Searches for an event in a list of event records that matches the specified event type.
   *
   * @param events - An array of blockchain event records.
   * @param eventType - The event type to search for.
   * @returns The matching event record or null if not found.
   */
  static find(events: FrameSystemEventRecord[], eventType: EventType) {
    const event = events.find((e) => {
      return eventType.is(e.event);
    });

    if (!event) {
      return null;
    }

    return event;
  }

  /**
   * Parses the data from a given event record.
   *
   * @param record - The event record to parse.
   *
   * @returns The parsed event data.
   */
  static parseData<E extends EventType>(
    record: FrameSystemEventRecord
  ): ParsedEventData<E> {
    return record.event.data as ParsedEventData<E>;
  }

  /**
   * Combines event searching and parsing. It first finds an event of the specified type
   * in the provided event records, then parses its data.
   *
   * @param events - An array of blockchain event records.
   * @param eventType - The event type to search for.
   *
   * @returns The parsed event data or null if the event is not found.
   */
  static findAndParseData<E extends EventType>(
    events: FrameSystemEventRecord[],
    eventType: E
  ): ParsedEventData<E> | null {
    const event = this.find(events, eventType);
    if (!event) {
      return null;
    }

    return this.parseData(event);
  }
}
