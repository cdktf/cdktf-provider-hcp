# `notificationsWebhook` Submodule <a name="`notificationsWebhook` Submodule" id="@cdktf/provider-hcp.notificationsWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationsWebhook <a name="NotificationsWebhook" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook hcp_notifications_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import notifications_webhook

notificationsWebhook.NotificationsWebhook(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: NotificationsWebhookConfigA,
  name: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  project_id: str = None,
  subscriptions: typing.Union[IResolvable, typing.List[NotificationsWebhookSubscriptions]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a></code> | The webhook configuration used to deliver event payloads. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.name">name</a></code> | <code>str</code> | The webhook's name. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.description">description</a></code> | <code>str</code> | The webhook's description. Descriptions are useful for helping others understand the purpose of the webhook. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the webhook should receive payloads for the subscribed events. Defaults to `true`. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the project to create the webhook under. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.subscriptions">subscriptions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>]]</code> | Set of events to subscribe the webhook to all resources or a specific resource in the project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a>

The webhook configuration used to deliver event payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#config NotificationsWebhook#config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.name"></a>

- *Type:* str

The webhook's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#name NotificationsWebhook#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.description"></a>

- *Type:* str

The webhook's description. Descriptions are useful for helping others understand the purpose of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#description NotificationsWebhook#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the webhook should receive payloads for the subscribed events. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#enabled NotificationsWebhook#enabled}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the project to create the webhook under.

If unspecified, the webhook will be created in the project the provider is configured with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#project_id NotificationsWebhook#project_id}

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.subscriptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>]]

Set of events to subscribe the webhook to all resources or a specific resource in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#subscriptions NotificationsWebhook#subscriptions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putSubscriptions">put_subscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetSubscriptions">reset_subscriptions</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putConfig"></a>

```python
def put_config(
  url: str,
  hmac_key: str = None
) -> None
```

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putConfig.parameter.url"></a>

- *Type:* str

The HTTP or HTTPS destination URL that HCP delivers the event payloads to.

The destination must be able to use the HCP webhook
[payload](https://developer.hashicorp.com/hcp/docs/hcp/admin/projects/webhooks#webhook-payload).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#url NotificationsWebhook#url}

---

###### `hmac_key`<sup>Optional</sup> <a name="hmac_key" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putConfig.parameter.hmacKey"></a>

- *Type:* str

The arbitrary secret that HCP uses to sign all its webhook requests.

This is a write-only field, it is written once and not visible thereafter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#hmac_key NotificationsWebhook#hmac_key}

---

##### `put_subscriptions` <a name="put_subscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putSubscriptions"></a>

```python
def put_subscriptions(
  value: typing.Union[IResolvable, typing.List[NotificationsWebhookSubscriptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putSubscriptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_subscriptions` <a name="reset_subscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetSubscriptions"></a>

```python
def reset_subscriptions() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NotificationsWebhook resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import notifications_webhook

notificationsWebhook.NotificationsWebhook.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import notifications_webhook

notificationsWebhook.NotificationsWebhook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import notifications_webhook

notificationsWebhook.NotificationsWebhook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import notifications_webhook

notificationsWebhook.NotificationsWebhook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NotificationsWebhook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NotificationsWebhook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NotificationsWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotificationsWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference">NotificationsWebhookConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.subscriptions">subscriptions</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList">NotificationsWebhookSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.configInput">config_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.subscriptionsInput">subscriptions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.config"></a>

```python
config: NotificationsWebhookConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference">NotificationsWebhookConfigAOutputReference</a>

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.subscriptions"></a>

```python
subscriptions: NotificationsWebhookSubscriptionsList
```

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList">NotificationsWebhookSubscriptionsList</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.configInput"></a>

```python
config_input: typing.Union[IResolvable, NotificationsWebhookConfigA]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `subscriptions_input`<sup>Optional</sup> <a name="subscriptions_input" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.subscriptionsInput"></a>

```python
subscriptions_input: typing.Union[IResolvable, typing.List[NotificationsWebhookSubscriptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationsWebhookConfig <a name="NotificationsWebhookConfig" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import notifications_webhook

notificationsWebhook.NotificationsWebhookConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: NotificationsWebhookConfigA,
  name: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  project_id: str = None,
  subscriptions: typing.Union[IResolvable, typing.List[NotificationsWebhookSubscriptions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a></code> | The webhook configuration used to deliver event payloads. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.name">name</a></code> | <code>str</code> | The webhook's name. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.description">description</a></code> | <code>str</code> | The webhook's description. Descriptions are useful for helping others understand the purpose of the webhook. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if the webhook should receive payloads for the subscribed events. Defaults to `true`. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project to create the webhook under. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.subscriptions">subscriptions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>]]</code> | Set of events to subscribe the webhook to all resources or a specific resource in the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.config"></a>

```python
config: NotificationsWebhookConfigA
```

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a>

The webhook configuration used to deliver event payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#config NotificationsWebhook#config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The webhook's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#name NotificationsWebhook#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The webhook's description. Descriptions are useful for helping others understand the purpose of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#description NotificationsWebhook#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if the webhook should receive payloads for the subscribed events. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#enabled NotificationsWebhook#enabled}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project to create the webhook under.

If unspecified, the webhook will be created in the project the provider is configured with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#project_id NotificationsWebhook#project_id}

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.subscriptions"></a>

```python
subscriptions: typing.Union[IResolvable, typing.List[NotificationsWebhookSubscriptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>]]

Set of events to subscribe the webhook to all resources or a specific resource in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#subscriptions NotificationsWebhook#subscriptions}

---

### NotificationsWebhookConfigA <a name="NotificationsWebhookConfigA" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import notifications_webhook

notificationsWebhook.NotificationsWebhookConfigA(
  url: str,
  hmac_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.property.url">url</a></code> | <code>str</code> | The HTTP or HTTPS destination URL that HCP delivers the event payloads to. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.property.hmacKey">hmac_key</a></code> | <code>str</code> | The arbitrary secret that HCP uses to sign all its webhook requests. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.property.url"></a>

```python
url: str
```

- *Type:* str

The HTTP or HTTPS destination URL that HCP delivers the event payloads to.

The destination must be able to use the HCP webhook
[payload](https://developer.hashicorp.com/hcp/docs/hcp/admin/projects/webhooks#webhook-payload).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#url NotificationsWebhook#url}

---

##### `hmac_key`<sup>Optional</sup> <a name="hmac_key" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.property.hmacKey"></a>

```python
hmac_key: str
```

- *Type:* str

The arbitrary secret that HCP uses to sign all its webhook requests.

This is a write-only field, it is written once and not visible thereafter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#hmac_key NotificationsWebhook#hmac_key}

---

### NotificationsWebhookSubscriptions <a name="NotificationsWebhookSubscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import notifications_webhook

notificationsWebhook.NotificationsWebhookSubscriptions(
  events: typing.Union[IResolvable, typing.List[NotificationsWebhookSubscriptionsEvents]],
  resource_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.property.events">events</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents">NotificationsWebhookSubscriptionsEvents</a>]]</code> | The information about the events of a webhook subscription. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.property.resourceId">resource_id</a></code> | <code>str</code> | Refers to the resource the webhook is subscribed to. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.property.events"></a>

```python
events: typing.Union[IResolvable, typing.List[NotificationsWebhookSubscriptionsEvents]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents">NotificationsWebhookSubscriptionsEvents</a>]]

The information about the events of a webhook subscription.

The service that owns the resource is responsible for maintaining events. Refer to the service's webhook documentation for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#events NotificationsWebhook#events}

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Refers to the resource the webhook is subscribed to.

If not set, the webhook subscribes to the emitted events listed in events for any resource in the webhook's project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#resource_id NotificationsWebhook#resource_id}

---

### NotificationsWebhookSubscriptionsEvents <a name="NotificationsWebhookSubscriptionsEvents" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import notifications_webhook

notificationsWebhook.NotificationsWebhookSubscriptionsEvents(
  actions: typing.List[str],
  source: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.property.actions">actions</a></code> | <code>typing.List[str]</code> | The list of event actions subscribed for the resource type set as the [source](#source). |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.property.source">source</a></code> | <code>str</code> | The resource type of the source of the event. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

The list of event actions subscribed for the resource type set as the [source](#source).

For example, `["create", "update"]`. When the action is '*', it means that the webhook is subscribed to all event actions for the event source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#actions NotificationsWebhook#actions}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.property.source"></a>

```python
source: str
```

- *Type:* str

The resource type of the source of the event.

For example, `hashicorp.packer.version`. Event source might not be the same type as the resource that the webhook is subscribed to ([resource_id](#resource_id)) if the event is from a descendant resource. For example, webhooks are subscribed to a `hashicorp.packer.registry` and receive events for descendent resources such as a `hashicorp.packer.version`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/notifications_webhook#source NotificationsWebhook#source}

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationsWebhookConfigAOutputReference <a name="NotificationsWebhookConfigAOutputReference" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import notifications_webhook

notificationsWebhook.NotificationsWebhookConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resetHmacKey">reset_hmac_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hmac_key` <a name="reset_hmac_key" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resetHmacKey"></a>

```python
def reset_hmac_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.hmacKeyInput">hmac_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.hmacKey">hmac_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hmac_key_input`<sup>Optional</sup> <a name="hmac_key_input" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.hmacKeyInput"></a>

```python
hmac_key_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `hmac_key`<sup>Required</sup> <a name="hmac_key" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.hmacKey"></a>

```python
hmac_key: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotificationsWebhookConfigA]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a>]

---


### NotificationsWebhookSubscriptionsEventsList <a name="NotificationsWebhookSubscriptionsEventsList" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import notifications_webhook

notificationsWebhook.NotificationsWebhookSubscriptionsEventsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NotificationsWebhookSubscriptionsEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents">NotificationsWebhookSubscriptionsEvents</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NotificationsWebhookSubscriptionsEvents]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents">NotificationsWebhookSubscriptionsEvents</a>]]

---


### NotificationsWebhookSubscriptionsEventsOutputReference <a name="NotificationsWebhookSubscriptionsEventsOutputReference" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import notifications_webhook

notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents">NotificationsWebhookSubscriptionsEvents</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotificationsWebhookSubscriptionsEvents]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents">NotificationsWebhookSubscriptionsEvents</a>]

---


### NotificationsWebhookSubscriptionsList <a name="NotificationsWebhookSubscriptionsList" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import notifications_webhook

notificationsWebhook.NotificationsWebhookSubscriptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NotificationsWebhookSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NotificationsWebhookSubscriptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>]]

---


### NotificationsWebhookSubscriptionsOutputReference <a name="NotificationsWebhookSubscriptionsOutputReference" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import notifications_webhook

notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.putEvents">put_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resetResourceId">reset_resource_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_events` <a name="put_events" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.putEvents"></a>

```python
def put_events(
  value: typing.Union[IResolvable, typing.List[NotificationsWebhookSubscriptionsEvents]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.putEvents.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents">NotificationsWebhookSubscriptionsEvents</a>]]

---

##### `reset_resource_id` <a name="reset_resource_id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resetResourceId"></a>

```python
def reset_resource_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.events">events</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList">NotificationsWebhookSubscriptionsEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.eventsInput">events_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents">NotificationsWebhookSubscriptionsEvents</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.events"></a>

```python
events: NotificationsWebhookSubscriptionsEventsList
```

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList">NotificationsWebhookSubscriptionsEventsList</a>

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.eventsInput"></a>

```python
events_input: typing.Union[IResolvable, typing.List[NotificationsWebhookSubscriptionsEvents]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents">NotificationsWebhookSubscriptionsEvents</a>]]

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotificationsWebhookSubscriptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>]

---



