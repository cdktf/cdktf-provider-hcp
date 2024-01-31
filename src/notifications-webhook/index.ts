// https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/notifications_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationsWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The webhook configuration used to deliver event payloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/notifications_webhook#config NotificationsWebhook#config}
  */
  readonly config: NotificationsWebhookConfigA;
  /**
  * The webhook's description. Descriptions are useful for helping others understand the purpose of the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/notifications_webhook#description NotificationsWebhook#description}
  */
  readonly description?: string;
  /**
  * Indicates if the webhook should receive payloads for the subscribed events. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/notifications_webhook#enabled NotificationsWebhook#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The webhook's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/notifications_webhook#name NotificationsWebhook#name}
  */
  readonly name: string;
  /**
  * The ID of the project to create the webhook under. If unspecified, the webhook will be created in the project the provider is configured with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/notifications_webhook#project_id NotificationsWebhook#project_id}
  */
  readonly projectId?: string;
  /**
  * Set of events to subscribe the webhook to all resources or a specific resource in the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/notifications_webhook#subscriptions NotificationsWebhook#subscriptions}
  */
  readonly subscriptions?: NotificationsWebhookSubscriptions[] | cdktf.IResolvable;
}
export interface NotificationsWebhookConfigA {
  /**
  * The arbitrary secret that HCP uses to sign all its webhook requests. This is a write-only field, it is written once and not visible thereafter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/notifications_webhook#hmac_key NotificationsWebhook#hmac_key}
  */
  readonly hmacKey?: string;
  /**
  * The HTTP or HTTPS destination URL that HCP delivers the event payloads to. 
  * The destination must be able to use the HCP webhook 
  * [payload](https://developer.hashicorp.com/hcp/docs/hcp/admin/projects/webhooks#webhook-payload).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/notifications_webhook#url NotificationsWebhook#url}
  */
  readonly url: string;
}

export function notificationsWebhookConfigAToTerraform(struct?: NotificationsWebhookConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hmac_key: cdktf.stringToTerraform(struct!.hmacKey),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function notificationsWebhookConfigAToHclTerraform(struct?: NotificationsWebhookConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hmac_key: {
      value: cdktf.stringToHclTerraform(struct!.hmacKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationsWebhookConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationsWebhookConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hmacKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacKey = this._hmacKey;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationsWebhookConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hmacKey = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hmacKey = value.hmacKey;
      this._url = value.url;
    }
  }

  // hmac_key - computed: false, optional: true, required: false
  private _hmacKey?: string; 
  public get hmacKey() {
    return this.getStringAttribute('hmac_key');
  }
  public set hmacKey(value: string) {
    this._hmacKey = value;
  }
  public resetHmacKey() {
    this._hmacKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacKeyInput() {
    return this._hmacKey;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface NotificationsWebhookSubscriptionsEvents {
  /**
  * The list of event actions subscribed for the resource type set as the [source](#source). For example, `["create", "update"]`. When the action is '*', it means that the webhook is subscribed to all event actions for the event source. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/notifications_webhook#actions NotificationsWebhook#actions}
  */
  readonly actions: string[];
  /**
  * The resource type of the source of the event. For example, `hashicorp.packer.version`. Event source might not be the same type as the resource that the webhook is subscribed to ([resource_id](#resource_id)) if the event is from a descendant resource. For example, webhooks are subscribed to a `hashicorp.packer.registry` and receive events for descendent resources such as a `hashicorp.packer.version`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/notifications_webhook#source NotificationsWebhook#source}
  */
  readonly source: string;
}

export function notificationsWebhookSubscriptionsEventsToTerraform(struct?: NotificationsWebhookSubscriptionsEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function notificationsWebhookSubscriptionsEventsToHclTerraform(struct?: NotificationsWebhookSubscriptionsEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationsWebhookSubscriptionsEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NotificationsWebhookSubscriptionsEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationsWebhookSubscriptionsEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._source = value.source;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class NotificationsWebhookSubscriptionsEventsList extends cdktf.ComplexList {
  public internalValue? : NotificationsWebhookSubscriptionsEvents[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NotificationsWebhookSubscriptionsEventsOutputReference {
    return new NotificationsWebhookSubscriptionsEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationsWebhookSubscriptions {
  /**
  * The information about the events of a webhook subscription. The service that owns the resource is responsible for maintaining events. Refer to the service's webhook documentation for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/notifications_webhook#events NotificationsWebhook#events}
  */
  readonly events: NotificationsWebhookSubscriptionsEvents[] | cdktf.IResolvable;
  /**
  * Refers to the resource the webhook is subscribed to. If not set, the webhook subscribes to the emitted events listed in events for any resource in the webhook's project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/notifications_webhook#resource_id NotificationsWebhook#resource_id}
  */
  readonly resourceId?: string;
}

export function notificationsWebhookSubscriptionsToTerraform(struct?: NotificationsWebhookSubscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(notificationsWebhookSubscriptionsEventsToTerraform, false)(struct!.events),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function notificationsWebhookSubscriptionsToHclTerraform(struct?: NotificationsWebhookSubscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    events: {
      value: cdktf.listMapperHcl(notificationsWebhookSubscriptionsEventsToHclTerraform, false)(struct!.events),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationsWebhookSubscriptionsEventsList",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationsWebhookSubscriptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NotificationsWebhookSubscriptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events?.internalValue;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationsWebhookSubscriptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events.internalValue = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events.internalValue = value.events;
      this._resourceId = value.resourceId;
    }
  }

  // events - computed: false, optional: false, required: true
  private _events = new NotificationsWebhookSubscriptionsEventsList(this, "events", false);
  public get events() {
    return this._events;
  }
  public putEvents(value: NotificationsWebhookSubscriptionsEvents[] | cdktf.IResolvable) {
    this._events.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }
}

export class NotificationsWebhookSubscriptionsList extends cdktf.ComplexList {
  public internalValue? : NotificationsWebhookSubscriptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NotificationsWebhookSubscriptionsOutputReference {
    return new NotificationsWebhookSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/notifications_webhook hcp_notifications_webhook}
*/
export class NotificationsWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_notifications_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationsWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationsWebhook to import
  * @param importFromId The id of the existing NotificationsWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/notifications_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationsWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_notifications_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.82.0/docs/resources/notifications_webhook hcp_notifications_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationsWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationsWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_notifications_webhook',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.82.0',
        providerVersionConstraint: '~> 0.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config.internalValue = config.config;
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._projectId = config.projectId;
    this._subscriptions.internalValue = config.subscriptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config = new NotificationsWebhookConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: NotificationsWebhookConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // subscriptions - computed: false, optional: true, required: false
  private _subscriptions = new NotificationsWebhookSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }
  public putSubscriptions(value: NotificationsWebhookSubscriptions[] | cdktf.IResolvable) {
    this._subscriptions.internalValue = value;
  }
  public resetSubscriptions() {
    this._subscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsInput() {
    return this._subscriptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: notificationsWebhookConfigAToTerraform(this._config.internalValue),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      subscriptions: cdktf.listMapper(notificationsWebhookSubscriptionsToTerraform, false)(this._subscriptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: notificationsWebhookConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationsWebhookConfigA",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriptions: {
        value: cdktf.listMapperHcl(notificationsWebhookSubscriptionsToHclTerraform, false)(this._subscriptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationsWebhookSubscriptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
