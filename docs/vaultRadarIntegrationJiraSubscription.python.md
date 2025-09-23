# `vaultRadarIntegrationJiraSubscription` Submodule <a name="`vaultRadarIntegrationJiraSubscription` Submodule" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarIntegrationJiraSubscription <a name="VaultRadarIntegrationJiraSubscription" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_integration_jira_subscription hcp_vault_radar_integration_jira_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_integration_jira_subscription

vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_id: str,
  issue_type: str,
  jira_project_key: str,
  name: str,
  assignee: str = None,
  message: str = None,
  project_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.connectionId">connection_id</a></code> | <code>str</code> | id of the integration jira connection to use for the subscription. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.issueType">issue_type</a></code> | <code>str</code> | The type of issue to be created from the event(s). Example: Task. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.jiraProjectKey">jira_project_key</a></code> | <code>str</code> | The name of the project under which the jira issue will be created. Example: OPS. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of subscription. Name must be unique. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.assignee">assignee</a></code> | <code>str</code> | The identifier of the Jira user who will be assigned the ticket. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.message">message</a></code> | <code>str</code> | This message will be included in the ticket description. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.connectionId"></a>

- *Type:* str

id of the integration jira connection to use for the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_integration_jira_subscription#connection_id VaultRadarIntegrationJiraSubscription#connection_id}

---

##### `issue_type`<sup>Required</sup> <a name="issue_type" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.issueType"></a>

- *Type:* str

The type of issue to be created from the event(s). Example: Task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_integration_jira_subscription#issue_type VaultRadarIntegrationJiraSubscription#issue_type}

---

##### `jira_project_key`<sup>Required</sup> <a name="jira_project_key" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.jiraProjectKey"></a>

- *Type:* str

The name of the project under which the jira issue will be created. Example: OPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_integration_jira_subscription#jira_project_key VaultRadarIntegrationJiraSubscription#jira_project_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.name"></a>

- *Type:* str

Name of subscription. Name must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_integration_jira_subscription#name VaultRadarIntegrationJiraSubscription#name}

---

##### `assignee`<sup>Optional</sup> <a name="assignee" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.assignee"></a>

- *Type:* str

The identifier of the Jira user who will be assigned the ticket.

In case of Jira Cloud, this will be the Atlassian Account ID of the user. Example: 71509:11bb945b-c0de-4bac-9d57-9f09db2f7bc9

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_integration_jira_subscription#assignee VaultRadarIntegrationJiraSubscription#assignee}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.message"></a>

- *Type:* str

This message will be included in the ticket description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_integration_jira_subscription#message VaultRadarIntegrationJiraSubscription#message}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_integration_jira_subscription#project_id VaultRadarIntegrationJiraSubscription#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetAssignee">reset_assignee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_assignee` <a name="reset_assignee" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetAssignee"></a>

```python
def reset_assignee() -> None
```

##### `reset_message` <a name="reset_message" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.resetProjectId"></a>

```python
def reset_project_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VaultRadarIntegrationJiraSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_integration_jira_subscription

vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_integration_jira_subscription

vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_integration_jira_subscription

vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_integration_jira_subscription

vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VaultRadarIntegrationJiraSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VaultRadarIntegrationJiraSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VaultRadarIntegrationJiraSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_integration_jira_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultRadarIntegrationJiraSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.assigneeInput">assignee_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.issueTypeInput">issue_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.jiraProjectKeyInput">jira_project_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.assignee">assignee</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.issueType">issue_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.jiraProjectKey">jira_project_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `assignee_input`<sup>Optional</sup> <a name="assignee_input" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.assigneeInput"></a>

```python
assignee_input: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `issue_type_input`<sup>Optional</sup> <a name="issue_type_input" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.issueTypeInput"></a>

```python
issue_type_input: str
```

- *Type:* str

---

##### `jira_project_key_input`<sup>Optional</sup> <a name="jira_project_key_input" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.jiraProjectKeyInput"></a>

```python
jira_project_key_input: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `assignee`<sup>Required</sup> <a name="assignee" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.assignee"></a>

```python
assignee: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `issue_type`<sup>Required</sup> <a name="issue_type" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.issueType"></a>

```python
issue_type: str
```

- *Type:* str

---

##### `jira_project_key`<sup>Required</sup> <a name="jira_project_key" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.jiraProjectKey"></a>

```python
jira_project_key: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarIntegrationJiraSubscriptionConfig <a name="VaultRadarIntegrationJiraSubscriptionConfig" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_radar_integration_jira_subscription

vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_id: str,
  issue_type: str,
  jira_project_key: str,
  name: str,
  assignee: str = None,
  message: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.connectionId">connection_id</a></code> | <code>str</code> | id of the integration jira connection to use for the subscription. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.issueType">issue_type</a></code> | <code>str</code> | The type of issue to be created from the event(s). Example: Task. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.jiraProjectKey">jira_project_key</a></code> | <code>str</code> | The name of the project under which the jira issue will be created. Example: OPS. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.name">name</a></code> | <code>str</code> | Name of subscription. Name must be unique. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.assignee">assignee</a></code> | <code>str</code> | The identifier of the Jira user who will be assigned the ticket. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.message">message</a></code> | <code>str</code> | This message will be included in the ticket description. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

id of the integration jira connection to use for the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_integration_jira_subscription#connection_id VaultRadarIntegrationJiraSubscription#connection_id}

---

##### `issue_type`<sup>Required</sup> <a name="issue_type" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.issueType"></a>

```python
issue_type: str
```

- *Type:* str

The type of issue to be created from the event(s). Example: Task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_integration_jira_subscription#issue_type VaultRadarIntegrationJiraSubscription#issue_type}

---

##### `jira_project_key`<sup>Required</sup> <a name="jira_project_key" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.jiraProjectKey"></a>

```python
jira_project_key: str
```

- *Type:* str

The name of the project under which the jira issue will be created. Example: OPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_integration_jira_subscription#jira_project_key VaultRadarIntegrationJiraSubscription#jira_project_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of subscription. Name must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_integration_jira_subscription#name VaultRadarIntegrationJiraSubscription#name}

---

##### `assignee`<sup>Optional</sup> <a name="assignee" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.assignee"></a>

```python
assignee: str
```

- *Type:* str

The identifier of the Jira user who will be assigned the ticket.

In case of Jira Cloud, this will be the Atlassian Account ID of the user. Example: 71509:11bb945b-c0de-4bac-9d57-9f09db2f7bc9

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_integration_jira_subscription#assignee VaultRadarIntegrationJiraSubscription#assignee}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.message"></a>

```python
message: str
```

- *Type:* str

This message will be included in the ticket description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_integration_jira_subscription#message VaultRadarIntegrationJiraSubscription#message}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultRadarIntegrationJiraSubscription.VaultRadarIntegrationJiraSubscriptionConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_radar_integration_jira_subscription#project_id VaultRadarIntegrationJiraSubscription#project_id}

---



