# `vaultRadarIntegrationSlackSubscription` Submodule <a name="`vaultRadarIntegrationSlackSubscription` Submodule" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarIntegrationSlackSubscription <a name="VaultRadarIntegrationSlackSubscription" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_radar_integration_slack_subscription hcp_vault_radar_integration_slack_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_integration_slack_subscription

vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  channel: str,
  connection_id: str,
  name: str,
  project_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.channel">channel</a></code> | <code>str</code> | Name of the Slack channel that messages should be sent to. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.connectionId">connection_id</a></code> | <code>str</code> | id of the integration slack connection to use for the subscription. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of subscription. Name must be unique. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.channel"></a>

- *Type:* str

Name of the Slack channel that messages should be sent to.

Note that HashiCorp Vault Radar will send a test message to verify the channel. Example: dev-ops-team

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_radar_integration_slack_subscription#channel VaultRadarIntegrationSlackSubscription#channel}

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.connectionId"></a>

- *Type:* str

id of the integration slack connection to use for the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_radar_integration_slack_subscription#connection_id VaultRadarIntegrationSlackSubscription#connection_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.name"></a>

- *Type:* str

Name of subscription. Name must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_radar_integration_slack_subscription#name VaultRadarIntegrationSlackSubscription#name}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_radar_integration_slack_subscription#project_id VaultRadarIntegrationSlackSubscription#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.resetProjectId"></a>

```python
def reset_project_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VaultRadarIntegrationSlackSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_integration_slack_subscription

vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_integration_slack_subscription

vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_integration_slack_subscription

vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_integration_slack_subscription

vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VaultRadarIntegrationSlackSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VaultRadarIntegrationSlackSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VaultRadarIntegrationSlackSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_radar_integration_slack_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultRadarIntegrationSlackSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarIntegrationSlackSubscriptionConfig <a name="VaultRadarIntegrationSlackSubscriptionConfig" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_integration_slack_subscription

vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  channel: str,
  connection_id: str,
  name: str,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.channel">channel</a></code> | <code>str</code> | Name of the Slack channel that messages should be sent to. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.connectionId">connection_id</a></code> | <code>str</code> | id of the integration slack connection to use for the subscription. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.name">name</a></code> | <code>str</code> | Name of subscription. Name must be unique. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.channel"></a>

```python
channel: str
```

- *Type:* str

Name of the Slack channel that messages should be sent to.

Note that HashiCorp Vault Radar will send a test message to verify the channel. Example: dev-ops-team

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_radar_integration_slack_subscription#channel VaultRadarIntegrationSlackSubscription#channel}

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

id of the integration slack connection to use for the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_radar_integration_slack_subscription#connection_id VaultRadarIntegrationSlackSubscription#connection_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of subscription. Name must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_radar_integration_slack_subscription#name VaultRadarIntegrationSlackSubscription#name}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultRadarIntegrationSlackSubscription.VaultRadarIntegrationSlackSubscriptionConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/vault_radar_integration_slack_subscription#project_id VaultRadarIntegrationSlackSubscription#project_id}

---



